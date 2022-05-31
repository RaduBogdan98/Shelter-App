using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using UserManagementMicroservice.Domain.Dto;
using UserManagementMicroservice.Model;
using UserManagementMicroservice.Repository;

namespace UserManagementMicroservice.Controllers
{
   [Route("Users/")]
   [ApiController]
   [ApiExplorerSettings(GroupName = "users")]
   public class UserManagementController : ControllerBase
   {
      private readonly IUserRepository _userRepository;
      private readonly IMapper _userMapper;

      public UserManagementController(IUserRepository userRepository, IMapper userMapper)
      {
         _userRepository = userRepository;
         _userMapper = userMapper;
      }

      /// <summary>
      /// Registers an user
      /// </summary>
      /// <param name="userDto">The user dto object</param>
      /// <returns></returns>
      [HttpPost("Register")]
      [ProducesResponseType(StatusCodes.Status500InternalServerError)]
      [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(UserDto))]
      public async Task<IActionResult> RegisterUserAsync([FromBody] UserDto userDto)
      {
         var user = _userMapper.Map<User>(userDto);
         var saved = await _userRepository.RegisterUserAsync(user);

         if (!saved)
         {
            return StatusCode((int)HttpStatusCode.InternalServerError);
         }

         return CreatedAtAction(nameof(AuthenticateUserAsync), new { email = user.Email, password = user.Password }, userDto);
      }

      /// <summary>
      /// Authenticates an user
      /// </summary>
      /// <param name="email">The email of the user</param>
      /// <param name="password">The password</param>
      /// <returns></returns>
      [HttpGet("Authenticate/{email}/{password}")]
      [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(string))]
      [ProducesResponseType(StatusCodes.Status404NotFound)]
      [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(UserDto))]
      public async Task<IActionResult> AuthenticateUserAsync(string email, string password)
      {
         if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
         {
            return BadRequest("Invalid parameters");
         }

         var user = await _userRepository.AuthenticateUserAsync(email, password);
         if (user == null)
         {
            return NotFound();
         }

         var userDto = _userMapper.Map<UserDto>(user);

         return Ok(userDto);
      }

      /// <summary>
      /// Updates user data
      /// </summary>
      /// <param name="userDto"></param>
      /// <returns></returns>
      [HttpPut("Update")]
      [ProducesResponseType(StatusCodes.Status500InternalServerError)]
      [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(UserDto))]
      public async Task<IActionResult> UpdateUserAsync([FromBody] UserDto userDto)
      {
         var user = _userMapper.Map<User>(userDto);
         var saved = await _userRepository.UpdateUserAsync(user);

         if (!saved)
         {
            return StatusCode((int)HttpStatusCode.InternalServerError);
         }

         return Ok(userDto);
      }

      /// <summary>
      /// Gets user by id
      /// </summary>
      /// <param name="userId"></param>
      /// <returns></returns>
      [HttpPut("GiveProviderAttributesToUser/{userId}/{company}/{address}")]
      [ProducesResponseType(StatusCodes.Status404NotFound)]
      [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(UserDto))]
      public async Task<IActionResult> GiveProviderAttributesToUser(int userId, string company, string address)
      {
         var user = await _userRepository.GetUserByIdAsync(userId);
         if (user == null)
         {
            return NotFound();
         }

         user.Type = UserType.Provider;
         user.Address = address;
         user.Company = company;

         var userDto = _userMapper.Map<UserDto>(user);

         return await UpdateUserAsync(userDto);
      }
   }
}
