import { ClimbingBoxLoader } from "react-spinners"

export const Loading = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <ClimbingBoxLoader
                size={30}
                color="#4ade80"
                loading={true}
                speedMultiplier={1}
            />
        </div>
    )
}
