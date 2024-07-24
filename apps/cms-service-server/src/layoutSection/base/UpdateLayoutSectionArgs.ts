/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LayoutSectionWhereUniqueInput } from "./LayoutSectionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { LayoutSectionUpdateInput } from "./LayoutSectionUpdateInput";

@ArgsType()
class UpdateLayoutSectionArgs {
  @ApiProperty({
    required: true,
    type: () => LayoutSectionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LayoutSectionWhereUniqueInput)
  @Field(() => LayoutSectionWhereUniqueInput, { nullable: false })
  where!: LayoutSectionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => LayoutSectionUpdateInput,
  })
  @ValidateNested()
  @Type(() => LayoutSectionUpdateInput)
  @Field(() => LayoutSectionUpdateInput, { nullable: false })
  data!: LayoutSectionUpdateInput;
}

export { UpdateLayoutSectionArgs as UpdateLayoutSectionArgs };
