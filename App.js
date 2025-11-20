import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import {SectionList, Image, ToastAndroid, StyleSheet, StatusBar, Text, TouchableOpacity, View,} from 'react-native';

const datasource = [
    {
        element: "ELECTRIC",
        textcolor: "darkorange",
        bgcolor: "yellow",
        icon:"bolt",
        data: [
            {id: "pikachu", name: "Pikachu", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png"},
            {id: "voltorb", name: "Voltorb", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_100-2x.png"},
        ],
    },
    {
        element: "WATER",
        textcolor: "darkblue",
        bgcolor: "lightblue",
        icon:"water",
        data: [
            {id: "squirtle", name: "Squirtle", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_7-2x.png"},
            {id: "psyduck", name: "Psyduck", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_54-2x.png"},
        ],
    },
    {
        element: "FIRE",
        textcolor: "darkred",
        bgcolor: "orange",
        icon:"fire",
        data: [
            {id: "charmander", name: "Charmander", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png"},
            {id: "vulpix", name: "Vulpix", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_37-2x.png"},
        ],
    },
];

//step 3 - Create StyleSheet
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        marginRight: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    opacityStyle: {
        borderWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#e8e5ff',
        marginVertical: 4,
    },
    cardImage: {
        width: 150,
        height: 210,
        resizeMode: 'contain',
    },
    sectionHeader: {
        paddingVertical: 6,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    sectionHeaderText: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    addButton: {
        margin: 10,
        paddingVertical: 12,
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

// Step 3 - Handler
const handler = () => {
    ToastAndroid.show('A Pokemon appeared nearby!', ToastAndroid.SHORT);
};

// Step 4 - Render item
const renderItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.opacityStyle} onPress={handler}>
            <Text style={styles.textStyle}>{item.name}</Text>
            <Image style={styles.cardImage} source={{ uri: item.img }} />
        </TouchableOpacity>
    );
};

// Step 5 - Main App
const App = () => {
    return (
        <View style={{ flex: 1, marginTop: 30 }}>
            <StatusBar />

            <TouchableOpacity style={styles.addButton} onPress={() => {}}>
                <Text style={styles.addButtonText}>ADD POKEMON</Text>
            </TouchableOpacity>

            <SectionList
                sections={datasource}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                renderSectionHeader={({ section }) => (
                    <View
                        style={[
                            styles.sectionHeader,
                            { backgroundColor: section.bgcolor },
                        ]}
                    >
                        <FontAwesome5
                            name={section.icon}
                            size={24}
                            color={section.textcolor}
                            style={{ marginRight: 8 }}
                        />
                        <Text
                            style={[
                                styles.sectionHeaderText,
                                { color: section.textcolor },
                            ]}
                        >
                            {section.element}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};
export default App;