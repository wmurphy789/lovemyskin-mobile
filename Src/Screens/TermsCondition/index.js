import React from 'react'
import { View} from 'react-native'
import { CurvedHeader } from '../../Components/Header'
import Methods from '../../Support/Methods'
import { WebView } from 'react-native-webview';
import AppConstants from '../../Theme/AppConstants'
import { AppImages } from '../../Theme/AppImages'
import styles from './styles'
import { responsiveHeight, responsiveWidth } from '../../Theme/ResponsiveDimensions';
const TermsCondition = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <CurvedHeader
                title={AppConstants.termsAndConditions}
                leftIcon={AppImages.backIcon}
                leftPress={() => { Methods.goBack(navigation) }}
            />
            <WebView
                source={{uri : AppConstants.TERMS_AND_CONDITION_URL}}
                style={{
                    width : '100%',                                          
                }}
            />
        </View >
    )
}

export default TermsCondition




