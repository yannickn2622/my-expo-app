import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ScrollView} from "react-native";
import {Redirect,router} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import "global.css"; 
import {images} from "../constants";
import CustomButton from "components/CustomButton";

export default function App(){
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className = "w-full justify-center items-center min-h-[85vh] px-4" style={{ flex: 1, justifyContent: 'flex-start' }}>
                    <Image 
                        source={images.logo}
                        className="w-[130px] h-[84px]"
                        resizeMode="contain" 
                        />

                     <Image 
                        source= {images.cards}
                        className="max-w-[380px] w-full h-[300px] mt-4"
                        resizeMode="contain"
                        />

                      <View className="relative mt-5">
                        <Text className="text-3xl text-white font-bold text-center">
                            Yao what's goood babuhs! Discover life with 
                            <Text className="text-secondary-200"> Aora </Text>
                        </Text>
                        
                        
                        {/* <Image 
                            source ={images.path}
                            className="w-[136px] h-[15px] absolute-bottom-2 -right-8"
                            resizeMode="contain"
                            /> // This is the unnecessary Underline*/}

                        </View>  

                        <Text className="text-sm font-pregular text-gray-100 mt-7 text-center"> 
                            Where Tingus meets the Pingus: Embark on a journey as the Celtics go back to back
                        </Text>
                        
                        <CustomButton 
                        title="Continue with Email" 
                        handlePress={() => router.push('/sign-in')} //allows user to sign in
                        containerStyles="w-full mt-7"     
                    
                         />
                </View>
            </ScrollView>
                            
            <StatusBar backgroundColor='#161622' style="auto" /> 
        </SafeAreaView>
            
    );
}


 
