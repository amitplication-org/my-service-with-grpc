import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductModuleBase } from "./base/product.module.base";
import { ProductService } from "./product.service";
import { ProductGrpcController } from "./product.grpc.controller";

@Module({
  imports: [ProductModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductGrpcController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
