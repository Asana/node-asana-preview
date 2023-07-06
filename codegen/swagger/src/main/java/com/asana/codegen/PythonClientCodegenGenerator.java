package com.asana.codegen;

import org.json.*;
import io.swagger.codegen.v3.generators.python.*;
import io.swagger.codegen.v3.*;

public class PythonClientCodegenGenerator extends PythonClientCodegen {
  @Override
  public void processOpts() {
    // custom generators do not set the CodegenConstants
    additionalProperties.put(CodegenConstants.PACKAGE_NAME, "asana-preview");
    setPackageName("asana-preview");

    additionalProperties.put(CodegenConstants.PROJECT_NAME, "asana-preview");
    setProjectName("asana-preview");

    // Super must be called AFTER our modification, otherwise the package name
    // somehow ends up wrong
    super.processOpts();
  }

  @Override
  public void setParameterExampleValue(CodegenParameter p) {
    // Our example correction code must execute before super, to ensure that
    // super does its special magic of determining the example type:
    // https://github.com/swagger-api/swagger-codegen-generators/blob/master/src/main/java/io/swagger/codegen/v3/generators/python/PythonClientCodegen.java#L639
    ExampleUtility.tryToSetExample(p);

    // "CSV" is used to declare that a query param string is joined by commas.
    // If that's the case, we can use the raw JSON representation as a valid
    // python list as the syntax is the same
    if ("csv".equalsIgnoreCase(p.collectionFormat)) {
      return;
    }

    super.setParameterExampleValue(p);
  }
}
