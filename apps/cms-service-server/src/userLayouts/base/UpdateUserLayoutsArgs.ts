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
import { UserLayoutsWhereUniqueInput } from "./UserLayoutsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserLayoutsUpdateInput } from "./UserLayoutsUpdateInput";

@ArgsType()
class UpdateUserLayoutsArgs {
  @ApiProperty({
    required: true,
    type: () => UserLayoutsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserLayoutsWhereUniqueInput)
  @Field(() => UserLayoutsWhereUniqueInput, { nullable: false })
  where!: UserLayoutsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserLayoutsUpdateInput,
  })
  @ValidateNested()
  @Type(() => UserLayoutsUpdateInput)
  @Field(() => UserLayoutsUpdateInput, { nullable: false })
  data!: UserLayoutsUpdateInput;
}

export { UpdateUserLayoutsArgs as UpdateUserLayoutsArgs };
