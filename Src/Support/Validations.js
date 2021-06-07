import { showMessage } from "react-native-flash-message";
import { AppColors } from "../Theme/AppColors";
import { AppFonts } from "../Theme/AppFonts";
import { responsiveFontSize } from "../Theme/ResponsiveDimensions";
const emailRegix = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegix = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const formikValidation = (email, password, confirmPassword) => {
  if (email?.length == 0) {
    showmessage("Please enter email address");
    return false;
  } else {
    if (emailRegix.test(email)) {
      if (password?.length == 0) {
        showmessage("Please enter password");
        return false;
      } else {
        if (passwordRegix.test(password)) {
          if (confirmPassword?.length == 0) {
            showmessage("Please enter confirm password");
            return false;
          } else {
            if (confirmPassword?.length > 0) {
              if (confirmPassword === password) {
                return true;
              } else {
                showmessage("Password and Confirm password should be same");
                return false;
              }
            } else {
              return true;
            }
          }
        } else {
          showmessage(
            "Please enter password in correct format(i.e.Min 8 chars,1 number,1 capitalamd 1 special char"
          );
          return false;
        }
      }
    } else {
      showmessage("Please enter a valid email address");
      return false;
    }
  }
};

const showmessage = (message) => {
  showMessage({
    message: message,
    duration: 3000,
    titleStyle: {
      color: AppColors.black,
      fontSize: responsiveFontSize(1.6),
      fontFamily: AppFonts.light,
      textAlign: "center",
    },
    style: {
      backgroundColor: "#f2f2f2",
      alignItems: "center",
      justifyContent: "center",
    },
  });
};

export { formikValidation, showmessage };
