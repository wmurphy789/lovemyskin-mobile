import { showMessage } from "react-native-flash-message";
import { AppColors } from "../Theme/AppColors";
import { AppFonts } from "../Theme/AppFonts";
import { responsiveFontSize } from "../Theme/ResponsiveDimensions";
const emailRegix = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegix = /^(?!.*[\s])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/;
const spaces = /^\S*$/;
const nameRegix = /^[A-Za-z0-9 ]*$/;
const userNameRegix = /^[A-Za-z0-9_ ]*$/;
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
                showmessage("Password and confirm password should be same");
                return false;
              }
            } else {
              return true;
            }
          }
        } else {
          showmessage(
            "Password must be a minimum of 8 characters including number, Upper, Lower And one special character"
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
const formikValidationProfile = (firstName, lastName, userName) => {
  if (firstName?.length == 0) {
    showmessage("Please enter first name");
    return false;
  } else {
    if (firstName?.length < 2) {
      showmessage("First name should be at least 2 characters long");
      return false;
    } else {
      if (nameRegix.test(firstName)) {
        if (lastName?.length == 0) {
          showmessage("Please enter last name");
          return false;
        } else {
          if (lastName?.length < 2) {
            showmessage("Last name should be at least 2 characters long");
            return false;
          } else {
            if (nameRegix.test(lastName)) {
              if (userName?.length == 0) {
                showmessage("Please enter username");
                return false;
              } else {
                if (userName?.length < 2) {
                  showmessage("Username should be at least 2 characters long");
                  return false;
                } else {
                  if (userNameRegix.test(userName)) {
                    if (!spaces.test(userName)) {
                      showmessage("Username should not contain spaces");
                      return false;
                    } else {
                      return true;
                    }
                  } else {
                    showmessage(
                      "Special characters not allowed in username (except _ )"
                    );
                    return false;
                  }
                }
              }
            } else {
              showmessage("Last name should be alphanumeric only");
              return false;
            }
          }
        }
      } else {
        showmessage("First name should be alphanumeric only");
        return false;
      }
    }
  }
};

const formikValidationChangePassword = (
  oldPassword,
  password,
  confirmPassword
) => {
  if (oldPassword?.length == 0) {
    showmessage("Please enter old password");
    return false;
  } else {
    if (passwordRegix.test(oldPassword)) {
      if (password?.length == 0) {
        showmessage("Please enter new password");
        return false;
      } else {
        if (passwordRegix.test(password)) {
          if (confirmPassword?.length == 0) {
            showmessage("Please enter confirm password");
            return false;
          } else {
            if (confirmPassword === password) {
              return true;
            } else {
              showmessage("New password and confirm password should be same");
              return false;
            }
          }
        } else {
          showmessage(
            "Password must be a minimum of 8 characters including number, Upper, Lower And one special character"
          );
          return false;
        }
      }
    } else {
      showmessage("Please enter correct old password");
      return false;
    }
  }
};
const formikValidationLogin = (email, password) => {
  if (email?.length == 0) {
    showmessage("Please enter email address");
    return false;
  } else {
    if (emailRegix.test(email)) {
      if (password?.length == 0) {
        showmessage("Please enter password");
        return false;
      } else {
        return true;
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
    duration: 1500,
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

export {
  formikValidation,
  showmessage,
  formikValidationProfile,
  formikValidationChangePassword,
  formikValidationLogin,
};
