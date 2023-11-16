import FlowStateStep from "./flowStateStep";

interface FlowTrayProps {
    name: string
}

export default function FlowTray(props: FlowTrayProps) {
  return (
    <div className="border-2 p-5 rounded-md bg-violet-50">
        <div className="text-sm ms-2 mb-2 text-indigo-400">
            {props.name}
        </div>
        <hr className="m-2 bg-indigo-400"/>
        <div className="inline-flex">
            <FlowStateStep style="bg-indigo-400"/>
            <FlowStateStep style="bg-indigo-400"/>
            <FlowStateStep style="bg-pink-300"/>
            <FlowStateStep style="bg-indigo-400"/>
            <FlowStateStep style="bg-indigo-400"/>
            <FlowStateStep style="bg-indigo-400"/>
            <FlowStateStep style="bg-indigo-400"/>
        </div>
        <hr className="m-2 bg-indigo-400"/>
        <div className="text-sm me-2 mt-2 text-indigo-400 text-end">
            <span className="mx-1">Promover a:</span>
            <select name="sad" id="" value="asdasds" placeholder="asdasd">
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
        </div>
    </div>
  )
}
