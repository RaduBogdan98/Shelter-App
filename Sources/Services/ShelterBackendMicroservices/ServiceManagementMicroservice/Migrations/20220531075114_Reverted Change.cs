using Microsoft.EntityFrameworkCore.Migrations;

namespace ServiceManagementMicroservice.Migrations
{
    public partial class RevertedChange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Id",
                table: "ServicesUsers");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "ServicesUsers",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
