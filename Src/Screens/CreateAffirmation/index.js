import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import { FullButton } from '../../Components/Button'
import { CurvedHeader } from '../../Components/Header'
import AppConstants from '../../Theme/AppConstants'
import { AppImages } from '../../Theme/AppImages'
import styles from './styles'

const CreateAffirmation = () => {

    const mainView = () => (
        <View style={styles.container}>
            <CurvedHeader
                title={AppConstants.myAffirmation}
                leftIcon={AppImages.backIcon}
                leftPress={() => { alert("goBack()") }} />
            <Text style={styles.infoText}>{AppConstants.createYourAffirmation}</Text>
            <TextInput
                multiline
                maxLength={500}
                placeholder={AppConstants.typeYourAffirmationHere}
                style={styles.input} />
            <View style={styles.addMusicView}>
                <Text style={styles.addMusicText}>{AppConstants.addMusicToYourAffirmation}</Text>
                <TouchableOpacity>
                    <Image source={AppImages.searchIcon} style={styles.searchIcon} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={AppConstants.dummyMusic}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.musicflatlist}
                renderItem={({ item, index }) => (
                    <View style={styles.musicView}>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={{ uri: item.albumPoster }} style={styles.musicAlbumPoster} />
                            <View>
                                <Text style={styles.musicAlbumTitle}>{item.albumTitle}</Text>
                                <Text style={styles.musicAlbumSong}>{item.albumSong}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.useThisAudioButton}>
                            <Text style={styles.useThisAudio}>{AppConstants.useThisAudio}</Text>
                        </TouchableOpacity>
                    </View>
                )} />
            <FullButton title={AppConstants.createAffirmation} customStyles={styles.button} />
        </View>
    )

    return (
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            {mainView()}
        </ScrollView>
    )
}

export default CreateAffirmation
