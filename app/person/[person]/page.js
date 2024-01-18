import Image from "next/image";
import Link from "next/link";
import Rating from "@/Components/common/Rating/rating";


// Bu sayfayı grid ile de yapabilirisn biraz araştır.

export default function Home(props) {
  return (
    <section>
      <div id="media_v4" className="bg-purple-500">
        <div id="column_wrapper">
          <div id="content_wrapper" className="flex">
            <div id="grey_column" className="w-1/4">
              <section id="orginal_header">
                <div id="image_content">
                  <div id="image">
                    <Image
                      src="/placeholder-image.svg"
                      alt="loading"
                      width={1000}
                      height={1000}
                    />
                  </div>
                </div>
              </section>
              <div className="column">
                <section id="details">
                  <div id="details_list">
                    <table>
                      <tbody>
                        <tr>
                          <th>Birthday</th>
                          <td>01/01/2000</td>
                        </tr>
                        <tr>
                          <th>Place of Birth</th>
                          <td>Place of Birth</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            </div>
            <div className="w-3/4">
              <div id="white_column">
                <section id="title">
                  <div>
                    <h2 id="title">
                      <Link href={"/"}>Name</Link>
                    </h2>
                  </div>
                </section>
                <section id="full_wrapper">
                  <div id="known_for">
                    <h3>Known For</h3>
                    <div id="known_for_list">
                      <ul>
                        <li>Image 1</li>
                        <li>Image 3</li>
                        <li>Image 5</li>
                        <li>Image 7</li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section id="credits">
                  <div id="credits_list">
                    <h3>Aacting</h3>
                    <table>
                      <tbody>
                        <tr>
                          <td>1</td>
                        </tr>
                      </tbody>
                    </table>
                    <h3>Crew</h3>
                    <table>
                      <tbody>
                        <tr>
                          <td>2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
