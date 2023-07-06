package com.asana.codegen;

import org.json.*;
import io.swagger.codegen.v3.generators.javascript.*;
import io.swagger.codegen.v3.CodegenConstants;
import io.swagger.codegen.v3.*;

public class JavascriptClientCodegenGenerator extends JavaScriptClientCodegen {
  @Override
  public void processOpts() {
    // custom generators do not set the CodegenConstants
    // Super must be called BEFORE our modification, otherwise the package name
    // somehow ends up wrong
    super.processOpts();
    setProjectName("asana-preview");
  }

  @Override
  public String getModelPropertyNaming() {
    // Javascript tries to use camelCase by default:
    // https://github.com/swagger-api/swagger-codegen-generators/blob/66dcca9d545892e18f982b2cde60621ec6f72bfe/src/main/java/io/swagger/codegen/v3/generators/javascript/JavaScriptClientCodegen.java#L112
    //
    // but we want it to use the OAS schema
    return CodegenConstants.MODEL_PROPERTY_NAMING_TYPE.original.toString();
  }

  @Override
  public void setParameterExampleValue(CodegenParameter p) {
    // Our example correction code must execute before super, to ensure that
    // super does its special magic of determining the example type:
    // https://github.com/swagger-api/swagger-codegen-generators/blob/master/src/main/java/io/swagger/codegen/v3/generators/javascript/JavaScriptClientCodegen.java#L714
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
