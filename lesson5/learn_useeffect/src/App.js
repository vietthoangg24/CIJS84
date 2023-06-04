import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'

function App() {
  // useEffect (callback,dependencies)
  // th1 ko co dependencies
  // th2 dependencies la mot mang []
  // th3 dependencies la 1 mang chua cac phan tu 

  useEffect(() => {
    console.log()
  })
const handleBackToTop = () =>{
  document.body.scrollTop =0 ;
  document.documentElement.scrollTop = 0;
}
 
useEffect (()=>{
  document.addEventListener('scroll',()=>{
    const position = documentElement,scrollTop;
    console.log('scrolling position ',position);
    if (position <50 ){
      document.getElementById
    }
  })
}
)


  return (
    

    <div className="App" >
      <p style={{width:'200px'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting
        , remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.

        It is a long established fact that a reader will be distracted by the readable content of

        a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal

        distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over
        the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
        from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of
        the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
        on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
        comes from a line in section 1.10.32.

        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
        those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
        by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H.
        Rackham.
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
        injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem
        Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
        the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which
        looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic
        words etc.
      </p>
      <p style={{width:'200px'}}>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
         proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>

      <p style={{width:'200px'}}>
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of
       pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal
        blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil
         and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and
          when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.
           But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that 
           pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."


      </p>
      <div style={{
        position : 'fixed',
        bottom:'200px',
        right:'50px',
        width:'75px',
        border:'1px solid black',
        display:'none'
      }}
      id='btn-back-ti-top'
      onClick={handleBackToTop}
      >
        Back to top
      </div>
    </div>
  );
}

export default App;
