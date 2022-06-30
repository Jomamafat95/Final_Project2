import React from 'react';
import { ActivityIndicator, 
    Button, 
    DrawerLayoutAndroid,
    FlatList, 
    FontWeight,
    Image, 
    ImageBackground, 
    InputAccessoryView,
    KeyboardAvoidingView, 
    Modal, 
    Pressable,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    SectionList,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
    VirtualizedList
} from 'react-native';

function GoalItem (props) {
return (
    <View style={styles.GoalItem}>
        <Pressable 
            android_ripple={{ color: '9F2B68' }} 
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem}
        >         
            <Text style={styles.GoalText}>{props.text}</Text>
        </Pressable>
    </View>
);
}

export default GoalItem;

const styles = StyleSheet.create({
GoalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#F96A2B',
},

pressedItem: {
    opacity: 0.5
},
 
GoalText: {
   color: '#FFFFFF',
   FontWeight: 25,
   padding: 8
  },
});