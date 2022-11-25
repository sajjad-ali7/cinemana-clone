import CollectionItem from "./CollectionItem";
import styles from "./collection.module.css";
export default function Collection() {
  return (
    <div className={styles.collections__parent}>
      <h1>Collections</h1>
      <div className={styles.flex}>
        <CollectionItem
          imagePath={"/3WZTxpgscsmoUk81TuECXdFOD0R.jpg"}
          id={230}
          name="The Godfather Collection"
          overview={
            "Francis Ford Coppola’s trilogy films about the everyday life of a New York mafia family. With its star-studded cast these films would go down in history as some of the greatest Hollywood has ever produced."
          }
        />
        <CollectionItem
          imagePath={"/dOSECZImeyZldoq0ObieBE0lwie.jpg"}
          id={645}
          name="James Bond Collection"
          overview={`The James Bond film series is a British series of spy films based on the fictional character of MI6 agent James Bond, codename "007". With all of the action, adventure, gadgetry & film scores that Bond is famous for.  (We do not consider the 1954 release of Casino Royale for this series because it was actually a television episode and not a theatrical film.)`}
        />
        <CollectionItem
          imagePath={"/zuW6fOiusv4X9nnW3paHGfXcSll.jpg"}
          id={86311}
          name="The Avengers Collection"
          overview={`A superhero film series produced by Marvel Studios based on the Marvel Comics superhero team of the same name, and part of the Marvel Cinematic Universe (MCU).  The series features an ensemble cast from the Marvel Cinematic Universe series films, as they join forces for the peacekeeping organization S.H.I.E.L.D. led by Nick Fury.`}
        />
        <CollectionItem
          imagePath={"/njFixYzIxX8jsn6KMSEtAzi4avi.jpg"}
          id={328}
          name="Jurassic Park Collection"
          overview={`An American science fiction adventure film series based on the novel of the same name by Michael Crichton. The films center on the fictional Isla Nublar near Costa Rica in the Central American Pacific Coast, where a billionaire philanthropist and a small team of genetic scientists have created an amusement park of cloned dinosaurs.`}
        />
        <CollectionItem
          imagePath={"/wxgD3fB5lQ2sGJLog0rvXW049Pf.jpg"}
          id={295}
          name="Pirates of the Caribbean Collection"
          overview={`A series of fantasy swashbuckler films based on Walt Disney's theme park ride of the same name. The films follow the adventures of Captain Jack Sparrow and take place in a fictional historical setting; a world ruled by the British Empire, the East India Trading Company and the Spanish Empire, with pirates representing freedom from the ruling powers.`}
        />
        <CollectionItem
          imagePath={"/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"}
          id={10}
          name="Star Wars Collection"
          overview={`An epic space-opera theatrical film series, which depicts the adventures of various characters "a long time ago in a galaxy far, far away…."`}
        />
        <CollectionItem
          imagePath={"/k9hhSHg5GS4UgWQC6MHBOZrarji.jpg"}
          id={14890}
          name="Bad Boys Collection"
          overview={`A franchise of films about the cop duo Mike Lowrey and Marcus Burnett, blowing stuff up and crazy car chases. They get the job done but at an expensive cost.`}
        />
      </div>
    </div>
  );
}
