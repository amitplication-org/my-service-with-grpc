import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TestModuleBase } from "./base/test.module.base";
import { TestService } from "./test.service";
import { TestGrpcController } from "./test.grpc.controller";

@Module({
  imports: [TestModuleBase, forwardRef(() => AuthModule)],
  controllers: [TestGrpcController],
  providers: [TestService],
  exports: [TestService],
})
export class TestModule {}
