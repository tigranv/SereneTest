namespace SereneTest15._1.Administration.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/Role"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RoleRow))]
    public class RoleController : Controller
    {       
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.Role.RoleIndex);
        }
    }
}