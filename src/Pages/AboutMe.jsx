import "./AboutMe.css";

export function AboutMe() {
  return (
    <>
      <h1>Who am I?</h1>
      <div className="myLife-container">
        <div className="myLife-item-1">
          <h3>Early childhood</h3>
          <section>
            <p>
              Born in Cape Coast, a city along the coast of Ghana in West
              Africa. The first child of five siblings. Raised in Tamale in the
              northern region of Ghana. Father was a teacher and mother was a
              nurse. I started my basic education in Tamale, the Northern
              regional capital in the north of Ghana.
            </p>
            <p></p>
          </section>
        </div>
        <div className="myLife-item-2">
          <h3>Teen years</h3>
          <p>
            I attended Tamale Secondary School from 1989 to 1994 and obtained my
            General Certificate of Education, Ordinary Level (GCE O Level).
            After graduation I gained admission to Prebyterian Boys Secondary
            School in Accra, the capital city of Ghana. The school was
            considered one of the best schools in Ghana. After two years of
            studies in Geography, Economics and Government, I passed my Advanced
            Level certification, the equivalent of level 100 in the United
            Kingdom i.e. first year of university education.
          </p>
          <br />
          <p>
            After completing my Advanced Level education, it was mandatory for
            for me to do national service. I was posted as a teacher to Vittin
            Secondary School in Tamale where I taught economics. This was
            1996/97 academic year. During my service I was able to apply for a
            job as a Radio Presenter with the Ghana Broadcasting Corporation in
            Tamale.
          </p>
          <br />
          <p>
            I worked as a Radio Presenter and a DJ from 1997 to 1998. During
            this time I introduced more lively programmes and attracted more
            listeners to the radio station. The name of the radio station was
            and still is Radio Savanna FM and my radio name was Kriss Gee.
          </p>
        </div>
        <div className="myLife-item-3">
          <h3>Adulthood</h3>
          <p>
            From 1998 to 2003 I studied land economy at University of Science
            and Technology in Kumasi. This period was the best ever experience
            that I ever had. During this period I met and made friends will
            fellow students from other parts of Ghana and we have been good
            friends till date.
          </p>
          <br />
          <p>
            During the semester breaks, I got the chance to travel to the United
            Kingdom to work in order to be able to be financially independent
            from my parents.
          </p>
          <br />
          <p>
            Moved to England after my studies and worked for a few months before
            finally joining the Bristish Army in the Corps of Royal Engineers as
            a survey engineer. After my training I was posted to Osnabrück in
            Germany.Prior to going on an operational tour in Afghanistan in
            2009, I had training tours in Canada and Cyprus. In 2012 I left the
            to pursue futher studies at the University of Hamburg,Germany.
          </p>
          <br />
          <div className="image-container">
            <img
              src="ghana-beach.jpg"
              id="ghana-beach"
              alt="a man and his daughter on kokrobite beach in ghana"
            />
            <div className="image-text">
              <p>Kokrobite Beach, Ghana</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
