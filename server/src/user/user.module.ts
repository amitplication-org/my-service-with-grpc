import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserModuleBase } from "./base/user.module.base";
import { UserService } from "./user.service";
import { UserGrpcController } from "./user.grpc.controller";

@Module({
  imports: [UserModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserGrpcController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
