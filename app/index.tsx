import { StatusBar } from "expo-status-bar";
import { Text, View} from "react-native";
import {Link} from "expo-router";
import "global.css"; 

export default function App(){
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-5xl font-pblack"> AoraYao!</Text>
            <StatusBar style="auto" />
            <Link href="/home" style={{ color: 'blue'}}>Go to Home</Link>
        </View>
    );
}


 
