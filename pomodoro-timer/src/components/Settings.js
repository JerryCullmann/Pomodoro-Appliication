import ReactSlider from "react-slider"
import SettingsContext from "./SettingsContext"
import {useContext} from "react"
import BackButton from "./BackButton"

function Settings(){
    const settingsInfo= useContext(SettingsContext)
    return(
        <div className="font-bold flex-col text-center p-8">
            <div className="">
            <label>Work : {settingsInfo.workMinutes}:00 minutes</label>
            <ReactSlider 
            className="border-red-600 border-4 h-12 w-72 my-2 mx-auto rounded-3xl"
            thumbClassName="bg-red-600 rounded-3xl w-12 h-12 cursor-pointer"
            trackClassName="track"
            value={settingsInfo.workMinutes}
            onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
            min={1}
            max={120}
            />
            </div>
            <div className="">
            <label>Break : {settingsInfo.breakMinutes}:00 minutes</label>
            <ReactSlider 
            className="border-green-600 border-4 h-12 w-72 my-2 mx-auto rounded-3xl"
            thumbClassName="bg-green-600 rounded-3xl w-12 h-12 cursor-pointer"
            trackClassName="track"
            value={settingsInfo.breakMinutes}
            onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
            min={1}
            max={120}
            />

            </div>

            <BackButton 
            onClick={() => {settingsInfo.setShowSettings(false)}} />

        </div>

    )
}
export default Settings