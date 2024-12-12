import EditorCommon from "@/components/common/editor-common"
import OutputCommon from "@/components/common/output-common"

const CodeStudioPage = () => {
  return (
    <div className="container mx-auto p-4">
        <div className="flex items-center gap-4">
            <div className="w-1/2">
                <EditorCommon />
            </div>
            <div className="w-1/2 rounded-sm">
                <OutputCommon />
            </div>
        </div>
    </div>
  )
}

export default CodeStudioPage