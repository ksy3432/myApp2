import React, { useEffect, useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Authservice from './fbase';

// const GoogleSigninConfigure = () => {
//     useEffect(() => {
//         // GoogleSignin.configure는 컴포넌트가 마운트될 때만 호출되어야 합니다.
//         GoogleSignin.configure({
//             webClientId: '34675203643-bb5f7mua09ao8j4sdesc5pm5vtggbltm.apps.googleusercontent.com',
//         });
//     }, []);

//     const onGoogleLogin = async () => {
//         try {
//             await GoogleSignin.hasPlayServices(); // 구글 플레이 서비스 확인
//             const userInfo = await GoogleSignin.signIn();
//             const googleCredential = Authservice.GoogleAuthProvider.credential(userInfo.idToken);
//             await Authservice.signInWithCredential(googleCredential);
//         } catch (error) {
//             console.error('Google 로그인 에러:', error);
//         }
//     }

//     return (
//         <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//             <Button
//                 title="Google"
//                 onPress={() => onGoogleLogin()}
//             />
//         </View>
//     );
// }

// export default GoogleSigninConfigure;

export default function Email_Login() {
    const [initiallize,setInitialize] = useState(true);
    const [user,setUser] = useState();
    const [email,SetEmail] = useState();   
    const [password,SetPassword] = useState();
    // const [text,onChangeText] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
        if(initiallize) setInitialize(false);
        SetEmail(email);
        SetPassword(password);
    }

    useEffect(() => {
        const subscriber = Authservice.onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    },[]);

    if (initiallize) return null;

    if (!user) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Login to your account!</Text>
                <TextInput placeholder='Enter your email address!'
                            onChangeText={(text) => SetEmail(text)}
                            value={email} />
                <TextInput placeholder='Enter your password!'
                            onChangeText={(text) => SetPassword(text)}
                            value={password}
                            secureTextEntry={true} />
                <Button title='로그인' />
            </View>
        );
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Welcome {user.email}</Text>
        </View>
    );
}