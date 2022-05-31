using Microsoft.EntityFrameworkCore.Migrations;

namespace ServiceManagementMicroservice.Migrations
{
   public partial class ChangedThumbnailType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IdUser",
                table: "ServicesUsers",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "IdService",
                table: "ServicesUsers",
                newName: "ServiceId");

            migrationBuilder.RenameColumn(
                name: "IdOwner",
                table: "Services",
                newName: "OwnerId");

            migrationBuilder.AlterColumn<string>(
                name: "ServiceThumbnail",
                table: "Services",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "varbinary(max)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "ServicesUsers",
                newName: "IdUser");

            migrationBuilder.RenameColumn(
                name: "ServiceId",
                table: "ServicesUsers",
                newName: "IdService");

            migrationBuilder.RenameColumn(
                name: "OwnerId",
                table: "Services",
                newName: "IdOwner");

            migrationBuilder.AlterColumn<byte[]>(
                name: "ServiceThumbnail",
                table: "Services",
                type: "varbinary(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }
    }
}
