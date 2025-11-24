import img1 from "../assets/images/features/1.png"
import img2 from "../assets/images/features/2.png"
import img3 from "../assets/images/features/3.png"
import img4 from "../assets/images/features/4.png"

const Features = () => {
  return (
    <div className="flex items-center justify-between flex-col sm:flex-row gap-16 sm:gap-0 container mx-auto py-11">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex-center gap-3">
                <img src={img1} alt="" />
                <p>Free Shipping</p>
            </div>
            <div className="flex-center gap-3">
                <img src={img2} alt="" />
                <p>Awarded Product Design</p>
            </div>
            <div className="flex-center gap-3">
                <img src={img3} alt="" />
                <p>Ecofriendly Approach</p>
            </div>
            <div className="flex-center gap-3">
                <img src={img4} alt="" />
                <p>Crafted in Spain</p>
            </div>
        </div>
        <p className="sm:w-1/5 text-right">4.8 Star Reviews</p>
    </div>
  )
}

export default Features