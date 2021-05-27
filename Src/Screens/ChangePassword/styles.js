import { StyleSheet } from "react-native";

import { responsiveHeight, responsiveWidth } from '../../Theme/ResponsiveDimensions'
export default StyleSheet.create({
    container: { flex: 1 },
    input: { alignSelf: "center", marginTop: responsiveHeight(2) },
    button: { alignSelf: "center", marginTop: responsiveHeight(12) }
})