import { IoEllipse } from "react-icons/io5";

interface IPaginationBulletProbs{
    totalPages:number;
    currentPage:number;
}

const PaginationBullet:React.FC<IPaginationBulletProbs> = ({totalPages,currentPage}):JSX.Element=>{
    const renderPageButtons = () => {
        const buttons = [];
    
        for (let page = 1; page <= totalPages; page++) {
          const isActive = page === currentPage;
    
          buttons.push(
            <button
              key={page}
              className=" w-auto h-[8px]"
            //   onClick={onPageClick}
            >
              {isActive ? (
                <IoEllipse className="w-[8px] h-[8px]" color="#FFFFFF" />
              ) : (
                <IoEllipse className="w-[8px] h-[8px]" color="#8A8989" />
              )}
            </button>
          );
        }
    
        return buttons;
      };
      return(
        <div className="flex gap-[8px] justify-center">
        {totalPages > 1 && renderPageButtons()}
      </div>
      )
}
export default PaginationBullet;