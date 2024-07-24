/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LayoutsWhereInput } from "./LayoutsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LayoutsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LayoutsWhereInput,
  })
  @ValidateNested()
  @Type(() => LayoutsWhereInput)
  @IsOptional()
  @Field(() => LayoutsWhereInput, {
    nullable: true,
  })
  every?: LayoutsWhereInput;

  @ApiProperty({
    required: false,
    type: () => LayoutsWhereInput,
  })
  @ValidateNested()
  @Type(() => LayoutsWhereInput)
  @IsOptional()
  @Field(() => LayoutsWhereInput, {
    nullable: true,
  })
  some?: LayoutsWhereInput;

  @ApiProperty({
    required: false,
    type: () => LayoutsWhereInput,
  })
  @ValidateNested()
  @Type(() => LayoutsWhereInput)
  @IsOptional()
  @Field(() => LayoutsWhereInput, {
    nullable: true,
  })
  none?: LayoutsWhereInput;
}
export { LayoutsListRelationFilter as LayoutsListRelationFilter };
