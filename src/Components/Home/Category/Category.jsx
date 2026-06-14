import Container from "../../ui/Container"
import { CategoryData } from '../../../Api/CategoryData'
import Card from './Card'

const Category = () => {
  return (
    <section className='mt-4 md:mt-25 mb-10 md:mb-0'>
        <Container>
            <div className='grid md:grid-cols-4 md:grid-rows-2 gap-3.75 md:gap-7.5'>
                { CategoryData?.map((item) => (
                <Card item={item}/>
            ))}
                
            </div>    
        </Container>
    </section>
  )
}

export default Category
