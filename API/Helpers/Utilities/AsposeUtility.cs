namespace API.Helpers.Utilities
{
    public class AsposeUtility
    {
        public static void Install()
        {
            try
            {
                Aspose.Cells.License cellLicense = new Aspose.Cells.License();
                string filePath = Directory.GetCurrentDirectory() + "\\Resources\\" + "Aspose.Total.lic";
                FileStream fileStream = new FileStream(filePath, FileMode.Open);
                cellLicense.SetLicense(fileStream);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}