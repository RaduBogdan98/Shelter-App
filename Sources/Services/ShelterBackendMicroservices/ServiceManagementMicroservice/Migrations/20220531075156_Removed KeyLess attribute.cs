using Microsoft.EntityFrameworkCore.Migrations;

namespace ServiceManagementMicroservice.Migrations
{
    public partial class RemovedKeyLessattribute : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "ServicesUsers",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ServicesUsers",
                table: "ServicesUsers",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_ServicesUsers",
                table: "ServicesUsers");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "ServicesUsers");
        }
    }
}
