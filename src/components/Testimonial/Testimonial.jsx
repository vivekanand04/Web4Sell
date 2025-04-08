import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Swami Vivekananda",
    text: "Arise, awake, and stop not till the goal is reached. 🚀",
    img: "data:image/jpeg;base64,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",
  },
  {
    id: 1,
    name: "Satya Nadela",
    text: "Our industry does not respect tradition—it only respects innovation.",
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgECAwUHBAj/xAA8EAABAwMCAwYDBgUCBwAAAAABAAIDBAUREiEGMUETIlFhcYEHMpEUI6GxwdEVQ1KC8ELhFiQzNVNyov/EABkBAAIDAQAAAAAAAAAAAAAAAAABAgMEBf/EACERAAICAwEBAQADAQAAAAAAAAABAhEDITESBEFRYaEy/9oADAMBAAIRAxEAPwDuKIiACIiACIvNXVUdHA6aTOBsGjm4+CALqmrhpYjJUPDG/iVHK/iWdxc2iibGOj5Bk/ReOtqJq+btJDtyaOgHl+6tjpMb7kjxWDL9LuonRw/KkvUzX1lVWVG81RO/+7A+gXgIkb3g6WI9HMeQVI3U2R8i8csGG6TsVnc5XbNahDlHnt3Fdfb5Qyqd9rg669ngeR6+6m9pvVFdotVHKC4fNG4Yc31C5xXUWnLsb+K1DZ5qKZs0Er45IzkPYcFq1Ys74zJm+ZdR25VUY4P4oZeovs9Xojr2DJAO0o/qb+oUmC2J2c9pplURExBERABERABERABERAFCorxLUmWvbTsJ0xN3APU+Pt+alTtgoK2T7TWTTHP3jy7f/PBZ/olUaRp+WFzt/h6YIw5ox6L2w0u2crDRs0veD0IWw1d3YLJCC/TbOb4jD2e2MLz1NMDkherVvzVJCNJUnFNEVJpmhr6b7rkolXNaKggdRghTita98e2AohdIWxTlz+gySqVqWi9u47MNA9lLBSVlM5zahk7tx0HT8cfVdhop21VJFUR/LIwOHuuC0FR2UskbzkOO4PTfK7JwfLqtXZ6tQZIQCfA7/qV0sT0cvMqZvURFaUBERABERABERABERAGKpOKeQjnoP5KEUTgX6/AnKmNXVwRPbDKXZkBGA0nZc4v96/4XtUlfLCKn/mzTtiD9B64cSR1x4LNni50omr55eLciVsGQHBwb/USvbG6BoAfOzJ6aguSHja8XCj+3OpKehoMERkyukdK7wAaFHKi9SVtw7CWiaKlxIy0PeW4xvu7r5KEcbXSyWRM77PCw9+Nw9ijYQ4Au8Fxm18b1lsMTKyiqDTtAI+yd/UOuxxy2z6rZ3j4ote0xW2hr43lmdVVEIxjblul4d8D0kunSKuONrHDI5dSoNfoZtRfqBjOdgeSgdyrZqykfcK+vrtLXYfCSWtGQSATnYnGw579FrIb1VSyRuoXGDSCWMkkc7W0eZG+UPBY19FKjfSTNZUBwzjG58+S678Npg+2zM1DoQM7jmuJcOyScR36K0U8Jjq5g4gSOAbhrS4/kV2X4bwOoW11PUPjDqd4hcBIDpcP9PPnjB9wtEIuPTPkkpcJ2ioDyVVaUBERABERABERABUVUQBFeKLI2tulHXSSysbDGWDs5C3fOeijt4sdDcH/ZqyLtwHgdpIe8NueepXRa2LtqaRnXG3qorP2TLhTluO8CfRyx5407N/zzUo+X+EE4f4QIuTqeWUOZRSvBgz8veyD5ZBBUpquFv4hIO07BjW7fdxYP4nH4LY3u1W6oP299XPQVbY9LqqlkDHFo3AdkEOA8wcKJUj+ILg+Q2a+1dZRMOn7RKxjA49dJAGr1Gyi/5bLI3WkbE2SibxJa7bSyuc6izV1A1DkRpaD7jPstd8Y3dnBQyslDHMkOSercbjPtlSzhy0w2xrpJZxLV1BBllJ5n3yT7/stVx/QRXGneHua0gZiJO2r0UrrYvHptGgtPD01RaoyRFOJG5AzpBJ67dVfHwI+eZtRXMhiZFnRHE52fUuKx8PsrrbA+Cmu8oZAQHQR6XtjzyIDmk4W9fR3Wvptb7r20Ls9xzxod6hjWn6lQ9f2ScdcIRwxamRXqnq4hiZ7nviljcQ7Q4u05PPdpwtFcyx12uNaHNfIKh7Gu0ggYcR+ilzZ5qK/F8z4y5sb8aG4AAaSNvZRrgW0y8RXyKkYCaaSQSTPx/pbu4++w91dFtoo8xjI+g+GjUO4ftprHh9QaWMyO8XaRlbNWRsaxjWMADWgADwCvWhcMbdsIiJiCIiACIiACIiAKFQ7iCJ8NxGluMhxZ58jspktJxPTukpWVEbcup3aiANy3qqs0fUC7BPzM5pxLS3K81McMjnttcYHaMjPemd0afLphbqK+2u39lb3VNNSujbhkDnhpA9CtzD2EzdIwS7BSehhqHwySxRumgdqie9udKxQf4dBrZ4Kuis1wZ9oikiZWacsnin0OH05+6gvEnD12mfHLNxJmKP5RI5ocPxXSzRVU8r5GyUrGlrR2ctO1w2JJwdjv+gWnr7bTBru0pLU4gkkilJO/9yu/LRBK21X+nNqKeHh+WWc1wnlkGHOM4yfxUl4XrbhdNEtOcRyuc1+DkaQ0nJPjkLScQ2a2OqmyzUjdWloDI+5GcDngHqppTzQ2bgl8sIDXFnZtOOp6D/OihOmgXqOiERSOkvNQJpNUemRpeN8DSQSur/DLhuns1pfVte2WercSZAMBrASGtb5dVCvhlZGXS+TT1ELZKSBhDw8ZDnHpjr/suzQxsijbHG0MY0Ya0DAAWrHGkY8s9tFyqiK0oCIiACIiACIiACIiACoQCCCMg9CqrzXCtgt1FPWVbwyCBhe9x6AIAgtwb/CLvLvildL3c/yz+y3LXdtG2SJwJ548Vrop4+JLW2tdD2bKtglaw7kAjbPstEKu48Ov0zRvnpGk6X43aPA+PqubLUmdSP8AyiZNxI1zGktcOYzstPcYnx6sNGMYO268cPG9peMh4D+rc7rx1XGlqEL9cusnOG+CcrapEoUpWzTV1rkra4HJDG/O7PJa/ia7x1dNSWW3uAgp3F0jzyGM7leG9cVmaNzKT7thzl+dyo0KnV3W8ick+KsxwfZFOWauon0P8M6WCDhKlfBHo7Yue4nm7vEZPsFK1BfhvxNbqqmHD7XiOvoY25jJ/wCq0gHU301YI6Kcg5WxcMEulURExBERABERABERABUVcqNX3jayWXUyWp+0Tj+TB3iD5nkPcooCQzysgidLK9rI2Auc5xwAB1JXC/iVxy++RT01A50VvhBIyMGYjk4jw8AqcZ8e1vEMBoxG2lo857Nhy6THLUfLwUGuH/bpi7ONKn5pWK90d64YBFmogG4AgZt/atnW00dRSuDmgkA81ZZYQ22U7QMDs24+i9jBqa5p9Fy6On6OYX7gKKsY6ejlMMw6NOAVzq6WK4Wup7Oaoe/BzzX0JU6oYziMuI5DHNc6vttkqqiapqdi7ZrGgbe6cMjjpjnjUlaOZVIOkcyfFXUmzxn1OVK5uHnNiL3sDRz3Wrqbd2DTJow3G2equWRMoeNo0DrxV0fEv8RopHRTxyAxuacEYAC+kOAuOYOI6SGKrLIa8t+UcpCOePPyXzVFSGorXnBPM/Rb23zyUens3lha4OBG2CtcNoyT1s+rEXArf8T+I6HZ00VZC3YtnZk49Rg/mplZvi5bqhzY7rRTUrjzfEe0b+6HFkbOlotbab9a7uzVbq6Gc/0tdhw9jutllIYRMogDDUVMNLEZamVkUbeb3uAA+qhd++JloomujtrXV8w2BblsYPrjf2XJbrerhd5+1uVXJO7oHHut9ByC8Wc8yVYoEbJFfeMbzew5s9W6KA/yYO4336n3Ucc7Pl6K17jzA/3VGFpbtnzB6KZEsmyW42WGubi2y7bBuVmczUcnl0Vly7ttnJOPu+SUuDXT6J4dcKmwUE3/AJKaN3/yFmZ3Z3NfzUa+G3EVHW8O0FC94hq4oGs0Pds/A5tPX0UtqYwdL2jcbLnSiboz2YZo2YznK0s9DDVTAYBweZGcLdzR6sDoVWOlbG0nGPNVOPpl0Z+UQ7iClggYAyLLidIJO5KjdxsctVCA1pLiOinD7c663TWdQpYORx87ldebhbLQ3DtMk3ythYRnyz4KEYSb0Tnkils5dU2KGx2t80gBqJQWsafPmfQKJVAw7uqX8SV5rnyzVDh2pGGgbBnkAoc2UukLH+OxK6eCDjHZzs01J6M9OMNwffbmrgzSSAAfDdUY4gYJ5qlTLBBHqkeBn5QOZPkFcUmcOfE4OY4sPQtOCFLrF8Q75agxk8xroRtoqDk48nc/rlQyJ+tgJBGd8Hmr8A5KKsDt1F8TrDPTtkqO3p5D80ejVj3CLh6JeUOz0aNQzjCqGYOyyEYx4FNIcQpES0s6N6rG+MEZJw7qRzCykNzz3yrckOI69R4IAtdiNhJbuOvgtfdnYtM555HNe+YOEbtXIDktfdGl1lk9EnwaJDamn+GUpZuzQ3bwPRSKl4mvlAGtirJC3oyUax9TlRywPzb6XQ1xGjde2clzi451taRgtKopMsTaJVT/ABBuTQ37TSUsgGe83LM/mvRN8RKmRroorfA0kYyZS78FB9DgwkYIPNzjy8dlYXOzkPwAMDb9lHyiXpkkreMLrPA5jqllPHjAbTt0/jzUfmq+1c5rSXEnm7kD59f3WFjGag4cwf6sq1rXl2oZ1Z+qaSXBNtltW7tY36nDVyxyUYccVLx0BUmkA7EnSQSB7KLSH79//sVbHhBmaofOYgacNLs4yenmr6WmDHdrITJKeb3fp4JBz/RZmHQT1HmpkTM0Acwrth1VGyFwB8VikecpgZDIGnA3RYA7xVUh0bBziNHmsrSRqREyJYXH/PVUiGYg7q52CURAGOoJEbl5asZtUjTy0oiBm44UOq2UwdvyGVs2ta6QFwBy7GPDl+6IqCwte0Gbs8DTjOPFYJQI3vDQMNdgZCoiQikp1hrSAMvIOOvJYnjSwEbZJBHT/NkRAzHKe0gLnc88/cBRep2qnBEVi4RNhbmtkglY4fLlwd1G35bK1+zXIimRL2d2CIjnpVj/AJc+aIgZjVERID//2Q==",
  },
  {
    id: 1,
    name: "Bill Gates",
    text: "India has a fantastic pool of software developers, and the country is a hub of innovation.",
    img: "data:image/jpeg;base64,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",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Thoughts of Great Thinkers and Innovators
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
              Throughout history, visionary leaders, entrepreneurs, and
              intellectuals have shared profound insights that continue to
              inspire and shape the world.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className=" flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                    >
                      <div>
                        <img
                          className="rounded-full w-20 h-20"
                          src={data.img}
                          alt=""
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-gray-500 text-sm">{data.text}</p>
                          <h1 className="text-xl font-bold text-black/80 dark:text-light">
                            {data.name}
                          </h1>
                        </div>
                      </div>

                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
