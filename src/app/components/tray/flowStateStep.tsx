interface FlowStateStepProps {
    style: string;
}

export default function FlowStateStep(props: FlowStateStepProps) {
  return (
    // <div className="border-2 bg-indigo-400 p-5 rounded-r-full mx-1 text-xs">
    //   step!
    // </div>

    <div className={`border-2 p-5 ${props.style} rounded-r-full mx-1 text-xs`}>
        step!
    </div>
  )
}
