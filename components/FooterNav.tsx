import { View, Text, Pressable } from 'react-native'
import { Link } from 'expo-router';
import React, { use } from 'react'
import { useRouter, useSegments } from 'expo-router';

const FooterNav = () => {

    const router = useRouter();
    const segment = useSegments();
    const activerouter = segment[0]?? "";
  return (
     <View
     className='w-full flex-row bg-black  p-[30px] justify-evenly ]'>
           
          <Pressable onPress={() => router.push("/profile")}
           className='{`${activerouter === "profile" ? "bg-blue-500" : "bg-gray-500"} p-2 rounded-lg`}'>
            <Text className='text-white text-lg font-semibold'>Profile</Text>
            </Pressable>

            <View>
              <Link
                href="/home/"
                style={{
                  color: "white",
                  fontSize:20
                }}
              >
                Home index
              </Link>
            </View>
             <View>
              <Link
                href="/home//test"
                style={{
                  color: "white",
                  fontSize:20
                }}
              >
                Home test
              </Link>
            </View>
            <View>
              <Link
                href={{
                    pathname: "/item/[id]",
                    params: { 
                        id: "1",
                        name:"dinu",
                        age:29,
                        address:"kathmandu"
                     }
                }}
                style={{
                  color: "white",
                  fontSize:20
                }}
              >
              goto item
              </Link>
            </View>
            <View>
              <Link
                href="/"
                style={{
                  color: "white",
                  fontSize:20
                }}
              >
                Home
              </Link>
            </View>
            <View>
              <Link
                href="/profile"
                style={{
                  color: "white",
                  fontSize:20
                }}
              >
                Profile
              </Link>
            </View>
             <View>
              <Link
                href="/login"
                style={{
                  color: "white",
                  fontSize:20
                }}
              >
                User Login
              </Link>
            </View>
            <View>
              <Link
                href="/user"
                style={{
                  color: "white",
                  fontSize:20
                }}
              >
                User
              </Link>
            </View>
            
          </View>
         )}

export default FooterNav