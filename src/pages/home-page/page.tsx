import HeaderComponent from "@/components/header/header-component"
import ProgrammingLanguageComponent from "@/components/programming-language-component/programming-language-component"

const HomePage = () => {
  return (
    <div className='text-popover container mx-auto'>
        <HeaderComponent />
        <ProgrammingLanguageComponent />
    </div>
  )
}

export default HomePage