using Microsoft.EntityFrameworkCore.Migrations;

namespace SystemManagementMicroservice.Migrations
{
    public partial class Update : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IdUser",
                table: "ProviderRequests",
                newName: "OwnerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "OwnerId",
                table: "ProviderRequests",
                newName: "IdUser");
        }
    }
}
