import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomerModuleBase } from "./base/customer.module.base";
import { CustomerService } from "./customer.service";
import { CustomerGrpcController } from "./customer.grpc.controller";

@Module({
  imports: [CustomerModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomerGrpcController],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
