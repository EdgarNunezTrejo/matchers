import { Stack } from "expo-router";

const ModalLayout = () => {
    return (
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen
                name="tc"
                options={{
                    presentation: 'modal',
                    animation: 'slide_from_bottom'
                }}
            />
            <Stack.Screen
                name="policy"
                options={{
                    presentation: 'modal',
                    animation: 'slide_from_bottom'
                }}
            />
        </Stack>
    );
}

export default ModalLayout;
