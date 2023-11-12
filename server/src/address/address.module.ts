import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AddressModuleBase } from "./base/address.module.base";
import { AddressService } from "./address.service";
import { AddressGrpcController } from "./address.grpc.controller";

@Module({
  imports: [AddressModuleBase, forwardRef(() => AuthModule)],
  controllers: [AddressGrpcController],
  providers: [AddressService],
  exports: [AddressService],
})
export class AddressModule {}
