import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TestService } from "./test.service";
import { TestGrpcControllerBase } from "./base/test.grpc.controller.base";

@swagger.ApiTags("tests")
@common.Controller("tests")
export class TestGrpcController extends TestGrpcControllerBase {
  constructor(protected readonly service: TestService) {
    super(service);
  }
}
