
function Jobs({ data }){
    
    return(
        <div>
            
            {data &&  data.map((d)=>(
                <a key={d.id} href={'https://join.com/companies/peaq/' + d.id}>
                    <div className='container-fluid flex w-full flex-col hover:cursor-pointer md:flex-row text-lg p-8 border hover:bg-gray-200 font-poppins'>
                        <div className='flex-none w-1/2 md:w-3/5 font-semibold text-3xl mt-2'>{d.title}</div>
                        <div className='flex w-full md:w-2/5 py-8 sm:py-4'>
                                <div className='flex-none w-32 text-left lg:text-right font-medium md:mt-1 lg:mt-0 text-xl'>Full Time</div>
                                <div className='flex-none w-32 text-left lg:text-right font-medium md:mt-1 lg:mt-0 text-xl'>Remote</div>
                                <div className="flex-auto  w-32 lg:mt-0 bg-no-repeat bg-right  bg-[url('https://uploads-ssl.webflow.com/627a684f1592ae13db1adba7/627a684f1592ae93871adc43_black%20Arrow.svg')]"></div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
)
}

async function getJob(id){
    
    const options = {
        method: 'GET',
        headers: {Accept: 'application/json', Authorization: process.env.JOINTOKEN}
      };

    const res = await fetch('https://api.join.com/v1/jobs/' + id, options)
    const data = await res.json()
    return data
}

export async function getServerSideProps(context) {
    // Fetch data from external API
    //console.log(process.env.JOINTOKEN)
    
    const options = {
        method: 'GET',
        headers: {Accept: 'application/json', Authorization: process.env.JOINTOKEN}
      };

    var resp = []

    const res = await fetch('https://api.join.com/v1/jobs', options)
    const data = await res.json()
    const len = Object.keys(data).length
    //var cont
    
    
    /*
    var resRow 
    var dataRow
    var a

    for(a=0;a<len-1;a++){
        dataRow = await getJob(a)
        resp.push(dataRow)
        console.log(dataRow)
    }
    
    */
    // Pass data to the page via props
    return { props: { data } }
  }

export default Jobs