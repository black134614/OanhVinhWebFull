using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace WebOanhVinh.ClassHelpers
{
    public static class Commons
    {
        public static string GetFirstImage(this string value)
        {
            if (string.IsNullOrWhiteSpace(value))
                return string.Empty;

            string[] result = value.Trim().Split("\n");
            return result[0];
        }

        public static string[] GetListImage(this string value)
        {
            if (string.IsNullOrWhiteSpace(value))
                return new string[] { };

            string[] result = value.Trim().Split("\n");
            return result;
        }

        public static string ToUrlFormat(this string value)
        {
            string result = value;
            result = value.Replace(" ", "-").Replace("/", "-");
            Regex regex = new Regex("-+");
            result = regex.Replace(result, "-");
            //Bỏ dấu
            regex = new Regex("\\p{IsCombiningDiacriticalMarks}+");
            result = result.Normalize(NormalizationForm.FormD);
            result = regex.Replace(result, String.Empty).Replace('\u0111', 'd').Replace('\u0110', 'D');
            return result.ToLower();
        }
    }
}
