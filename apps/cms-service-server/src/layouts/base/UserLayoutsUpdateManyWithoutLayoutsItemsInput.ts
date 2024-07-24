/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UserLayoutsWhereUniqueInput } from "../../userLayouts/base/UserLayoutsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UserLayoutsUpdateManyWithoutLayoutsItemsInput {
  @Field(() => [UserLayoutsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserLayoutsWhereUniqueInput],
  })
  connect?: Array<UserLayoutsWhereUniqueInput>;

  @Field(() => [UserLayoutsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserLayoutsWhereUniqueInput],
  })
  disconnect?: Array<UserLayoutsWhereUniqueInput>;

  @Field(() => [UserLayoutsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserLayoutsWhereUniqueInput],
  })
  set?: Array<UserLayoutsWhereUniqueInput>;
}

export { UserLayoutsUpdateManyWithoutLayoutsItemsInput as UserLayoutsUpdateManyWithoutLayoutsItemsInput };
