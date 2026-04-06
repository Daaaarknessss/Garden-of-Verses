import { useState, useEffect, useRef, useCallback } from "react";

const poems = {
  spring: {
    label: "Spring",
    subtitle: "of beginnings & first light",
    icon: "🌱",
    color: "#8C9A84",
    poems: [
      {
        title: "A Little Miracle Every Day",
        author: "Oh Ae-sun",
        source: "When Life Gives You Tangerines (2025)",
        lines: [
          "Seeing a loved one",
          "return each day",
          "through the door",
          "they left",
          "in the morning.",
        ],
      },
      {
        title: "Geum Myeong, Our Eternal Nostalgia",
        author: "Oh Ae-sun",
        source: "When Life Gives You Tangerines (2025)",
        lines: [
          "You are our gold medal,",
          "born when the tangerines",
          "were sweetest.",
          "We gave up our dreams",
          "so yours could breathe.",
          "And we would do it",
          "again and again.",
        ],
      },
      {
        title: "Where The Mind Is Without Fear",
        author: "Rabindranath Tagore",
        source: "Gitanjali — Song Offerings (1910)",
        lines: [
          "Where the mind is without fear",
          "and the head is held high;",
          "Where knowledge is free;",
          "Where the world has not been broken up",
          "into fragments",
          "by narrow domestic walls;",
          "Where words come out",
          "from the depth of truth;",
          "Where tireless striving",
          "stretches its arms towards perfection;",
          "",
          "Into that heaven of freedom,",
          "my Father,",
          "let my country awake.",
        ],
      },
      {
        title: "On Words & Ideas",
        author: "John Keating (Robin Williams)",
        source: "Dead Poets Society (1989)",
        lines: [
          "We don't read and write poetry",
          "because it's cute.",
          "We read and write poetry",
          "because we are members",
          "of the human race.",
          "And the human race",
          "is filled with passion.",
          "",
          "Medicine, law, business, engineering—",
          "these are noble pursuits",
          "and necessary to sustain life.",
          "But poetry, beauty,",
          "romance, love—",
          "these are what we stay alive for.",
        ],
      },
      {
        title: "The Seed",
        author: "Kabir",
        source: "Songs of Kabir, tr. Rabindranath Tagore (1915)",
        lines: [
          "The seed is in the ground.",
          "Now may some blessing",
          "fall on the one",
          "who brought this world",
          "into being,",
          "on the one who waters it,",
          "on the one who makes it flower.",
          "",
          "The heart in you is the heart",
          "in all things.",
          "No separation exists",
          "between the garden",
          "and the gardener.",
        ],
      },
      {
        title: "I Want To Do With You",
        author: "Pablo Neruda",
        source: "Twenty Love Poems and a Song of Despair (1924)",
        lines: [
          "I want",
          "to do with you",
          "what spring does",
          "with the cherry trees.",
          "",
          "My words rained over you,",
          "stroking you.",
          "A long time I have loved",
          "the sunned mother-of-pearl",
          "of your body.",
          "I will bring you",
          "happy flowers from the mountains,",
          "bluebells, dark hazels,",
          "and rustic baskets of kisses.",
        ],
      },
    ],
  },
  summer: {
    label: "Summer",
    subtitle: "of burning hearts & long days",
    icon: "☀️",
    color: "#C27B66",
    poems: [
      {
        title: "The Steel Axe",
        author: "Oh Ae-sun",
        source: "When Life Gives You Tangerines (2025)",
        lines: [
          "Do you know why",
          "I'm marrying Yang Gwan-sik,",
          "the lamest boy in all of Jeju?",
          "Steel.",
          "You're like a steel.",
          "Even if someone gave me",
          "a gold or silver axe,",
          "the steel axe is mine.",
          "The steel axe is the real deal.",
        ],
      },
      {
        title: "The Hungry Days",
        author: "Oh Ae-sun",
        source: "When Life Gives You Tangerines (2025)",
        lines: [
          "There are no take backs in life.",
          "If your life and my life",
          "join together as one,",
          "we stick it out together",
          "whether we live or die.",
          "We may have hungry days,",
          "but you'll never",
          "break my heart.",
        ],
      },
      {
        title: "Drinking Alone by Moonlight",
        author: "Li Bai",
        source: "Tang Dynasty, 8th century",
        lines: [
          "Among the flowers,",
          "a jug of wine.",
          "I pour alone,",
          "lacking companions.",
          "",
          "So raising my cup",
          "I invite the moon.",
          "And my shadow makes three.",
          "",
          "The moon does not know drinking.",
          "My shadow merely follows.",
          "But with moon and shadow as company,",
          "I must make merry",
          "before the spring is gone.",
        ],
      },
      {
        title: "The Wound",
        author: "Jalāl ad-Dīn Muhammad Rūmī",
        source: "Divan-e Shams, 13th century",
        lines: [
          "The wound is the place",
          "where the Light enters you.",
          "",
          "Don't turn away.",
          "Keep your gaze",
          "on the bandaged place.",
          "That's where",
          "the light enters you.",
          "",
          "Don't grieve.",
          "Anything you lose",
          "comes round",
          "in another form.",
        ],
      },
      {
        title: "Carpe Diem",
        author: "John Keating (Robin Williams)",
        source: "Dead Poets Society (1989)",
        lines: [
          "Seize the day.",
          "Gather ye rosebuds",
          "while ye may.",
          "",
          "The powerful play goes on",
          "and you may",
          "contribute a verse.",
          "What will your verse be?",
          "",
          "No matter what anybody tells you,",
          "words and ideas",
          "can change the world.",
        ],
      },
      {
        title: "The Summer Day",
        author: "Mary Oliver",
        source: "House of Light (1990)",
        lines: [
          "Who made the world?",
          "Who made the swan, and the black bear?",
          "Who made the grasshopper?",
          "This grasshopper, I mean—",
          "",
          "the one who has flung herself",
          "out of the grass,",
          "the one who is eating sugar",
          "out of my hand.",
          "",
          "Tell me, what is it you plan to do",
          "with your one wild",
          "and precious life?",
        ],
      },
    ],
  },
  autumn: {
    label: "Autumn",
    subtitle: "of letting go & quiet grace",
    icon: "🍂",
    color: "#B8956A",
    poems: [
      {
        title: "Fall Breeze",
        author: "Oh Ae-sun",
        source: "When Life Gives You Tangerines (2025)",
        lines: [
          "The wind changes",
          "before we do.",
          "Leaves know when to fall—",
          "they don't ask permission.",
          "Perhaps that's what courage is:",
          "to let go",
          "when holding on",
          "hurts more than the ground.",
        ],
      },
      {
        title: "The Calloused Heart",
        author: "Oh Ae-sun",
        source: "When Life Gives You Tangerines (2025)",
        lines: [
          "I thought that once you grew up,",
          "your hands and heart",
          "would naturally become calloused.",
          "But everything's still",
          "too hot for me.",
          "I get burned every day,",
          "but it hurts every time.",
          "Am I the only fool",
          "in the world?",
        ],
      },
      {
        title: "The Moon Cannot Be Stolen",
        author: "Ryōkan",
        source: "Zen kōan, Shasekishū (13th century)",
        lines: [
          "A thief visited Ryōkan",
          "and found nothing to steal.",
          "",
          "Ryōkan returned and said:",
          "You have come a long way.",
          "You should not return",
          "empty-handed.",
          "Please take my clothes",
          "as a gift.",
          "",
          "Watching the thief disappear:",
          "Poor fellow.",
          "I wish I could give him",
          "this beautiful moon.",
        ],
      },
      {
        title: "On Silence",
        author: "Jalāl ad-Dīn Muhammad Rūmī",
        source: "Masnavi, 13th century",
        lines: [
          "Silence is the language of God,",
          "all else is poor translation.",
          "",
          "Why are you so afraid of silence?",
          "Silence is the root",
          "of everything.",
          "If you spiral into its void,",
          "a hundred voices will thunder",
          "messages you long to hear.",
        ],
      },
      {
        title: "On Looking Differently",
        author: "John Keating (Robin Williams)",
        source: "Dead Poets Society (1989)",
        lines: [
          "I stand upon my desk",
          "to remind myself",
          "that we must constantly",
          "look at things",
          "in a different way.",
          "",
          "Just when you think",
          "you know something,",
          "you have to look at it",
          "in another way.",
          "Even though it may seem",
          "silly or wrong,",
          "you must try.",
        ],
      },
      {
        title: "True Love",
        author: "Wisława Szymborska",
        source: "View with a Grain of Sand (1995)",
        lines: [
          "True love. Is it normal,",
          "is it serious, is it practical?",
          "What does the world get from two people",
          "who exist in a world of their own?",
          "",
          "Placed on the same pedestal for no good reason,",
          "drawn randomly from millions,",
          "but convinced",
          "it had to happen—",
          "",
          "Isn't it a threat to good order?",
          "A distraction approved by two?",
          "",
          "True love. Is it really necessary?",
        ],
      },
    ],
  },
  winter: {
    label: "Winter",
    subtitle: "of stillness & deepest love",
    icon: "❄️",
    color: "#7A8B9A",
    poems: [
      {
        title: "To The Heart That Leaves Me Behind",
        author: "Oh Ae-sun",
        source: "When Life Gives You Tangerines (2025)",
        lines: [
          "When I was young",
          "I believed I had to hold your hand",
          "to feel its warmth.",
          "But now I know",
          "you're with me,",
          "even if you're not by my side.",
          "I'll live knowing",
          "the moon is still there,",
          "even during the day.",
        ],
      },
      {
        title: "Thank You For Your Hard Work",
        author: "Oh Ae-sun",
        source: "When Life Gives You Tangerines (2025)",
        lines: [
          "Thanks to you",
          "my life has been",
          "spring every day.",
          "",
          "So if you're going to leave,",
          "go like the gentle waves.",
          "After fifty years",
          "finally set me down",
          "and be free.",
          "My precious dear,",
          "you have worked so hard.",
        ],
      },
      {
        title: "Quiet Night Thought",
        author: "Li Bai",
        source: "Tang Dynasty, 8th century",
        lines: [
          "Moonlight before my bed—",
          "perhaps frost on the ground.",
          "",
          "I raise my head",
          "to gaze at the bright moon.",
          "",
          "I lower my head",
          "and think of home.",
        ],
      },
      {
        title: "Gitanjali 35",
        author: "Rabindranath Tagore",
        source: "Gitanjali — Song Offerings (1910)",
        lines: [
          "Let only that little be left of me",
          "whereby I may name thee my all.",
          "",
          "Let only that little be left of my will",
          "whereby I may feel thee",
          "on every side,",
          "and come to thee in everything,",
          "and offer to thee my love",
          "every moment.",
          "",
          "Let only that little be left of me",
          "whereby I may never hide thee.",
        ],
      },
      {
        title: "A Man In His Life",
        author: "Yehuda Amichai",
        source: "Open Closed Open (2000)",
        lines: [
          "A man doesn't have time in his life",
          "to have time for everything.",
          "He doesn't have seasons enough",
          "to have a season for every purpose.",
          "",
          "A man needs to love and to hate",
          "at the same moment,",
          "to laugh and cry",
          "with the same eyes,",
          "with the same hands to throw stones",
          "and to gather them.",
          "",
          "And he who is wise in love,",
          "loves like a flower",
          "whose petals are shut around",
          "the center.",
        ],
      },
      {
        title: "Moonlit Night",
        author: "Du Fu",
        source: "Tang Dynasty, 8th century",
        lines: [
          "Tonight the moon rises over her town.",
          "In her chamber alone she watches it.",
          "",
          "Far away, I think of our children,",
          "too young to understand",
          "this separation.",
          "",
          "Her cloud-dark hair",
          "is damp with fragrant mist,",
          "her jade-white arms",
          "cold in the clear light.",
          "",
          "When will we lean together",
          "at the open casement,",
          "while the moon dries",
          "the tears on both our faces?",
        ],
      },
      {
        title: "Don't Go Anywhere Without Me",
        author: "Jalāl ad-Dīn Muhammad Rūmī",
        source: "Divan-e Shams, 13th century, tr. J. Star",
        lines: [
          "Don't go anywhere without me.",
          "Let nothing happen in the sky",
          "apart from me,",
          "or on the ground,",
          "in this world or that world,",
          "without my being",
          "in its happening.",
          "",
          "There's nothing worse",
          "than to walk out",
          "along the street",
          "without you.",
          "I don't know where I'm going.",
          "You're the road,",
          "and the knower of roads,",
          "more than maps,",
          "more than love.",
        ],
      },
      {
        title: "On Finding Your Voice",
        author: "John Keating (Robin Williams)",
        source: "Dead Poets Society (1989)",
        lines: [
          "Boys, you must strive",
          "to find your own voice.",
          "Because the longer you wait",
          "to begin,",
          "the less likely you are",
          "to find it at all.",
          "",
          "Thoreau said:",
          "Most men lead lives",
          "of quiet desperation.",
          "Don't be resigned to that.",
          "Break out!",
          "Now is the time!",
        ],
      },
    ],
  },
};

/* ───────────────────────── INTRO SEQUENCE ───────────────────────── */
function IntroSequence({ onComplete }) {
  const [visCount, setVisCount] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const allWords = [
    { text: "words", line: 0, italic: false },
    { text: "are", line: 0, italic: false },
    { text: "seeds.", line: 0, italic: true },
    { text: "plant", line: 1, italic: false },
    { text: "them", line: 1, italic: false },
    { text: "in", line: 1, italic: false },
    { text: "silence,", line: 1, italic: true },
    { text: "and", line: 2, italic: false },
    { text: "watch", line: 2, italic: false },
    { text: "them", line: 2, italic: false },
    { text: "bloom.", line: 2, italic: true },
  ];

  useEffect(() => {
    const steps = [
      [400,1],[1000,2],[1600,3],
      [2800,4],[3100,5],[3350,6],[3700,7],
      [4800,8],[5100,9],[5350,10],[5700,11],
    ];
    const timers = steps.map(([ms,c]) => setTimeout(() => setVisCount(c), ms));
    timers.push(setTimeout(() => setFadeOut(true), 7200));
    timers.push(setTimeout(() => onComplete(), 8600));
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div style={{
      position:"fixed",inset:0,zIndex:100,background:"#F9F8F4",
      display:"flex",alignItems:"center",justifyContent:"center",
      transition:"opacity 1.3s ease-out",
      opacity:fadeOut?0:1,pointerEvents:fadeOut?"none":"auto",
    }}>
      <div style={{maxWidth:520,padding:"0 32px",textAlign:"center"}}>
        {allWords.map((w,i) => (
          <span key={i}>
            {i>0 && w.line!==allWords[i-1].line && <br/>}
            <span style={{
              fontFamily:"'Playfair Display',Georgia,serif",
              fontSize:"clamp(30px,6vw,48px)",fontWeight:600,
              color:"#2D3A31",display:"inline-block",
              opacity:i<visCount?1:0,
              transform:i<visCount?"translateY(0)":"translateY(20px)",
              transition:"opacity 0.8s ease-out,transform 0.8s ease-out",
              marginRight:10,lineHeight:1.6,
              fontStyle:w.italic?"italic":"normal",
            }}>{w.text}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── POEM READER ───────────────────────── */
function PoemReader({ poem, onClose }) {
  const [revealedWords, setRevealedWords] = useState(0);
  const [isFullyRevealed, setIsFullyRevealed] = useState(false);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  const allWords = poem.lines.flatMap((line,li) =>
    line==="" ? [{word:"∅",lineIndex:li,isBreak:true}]
    : line.split(" ").map((w,wi) => ({word:w,lineIndex:li,wordIndex:wi,isBreak:false}))
  );

  useEffect(() => {
    let count=0;
    const revealNext = () => {
      if(count>=allWords.length){setIsFullyRevealed(true);return;}
      const cur=allWords[count]; count++; setRevealedWords(count);
      if(cur.isBreak){timerRef.current=setTimeout(revealNext,500);return;}
      const isEnd=count>=allWords.length||allWords[count]?.lineIndex!==cur.lineIndex;
      timerRef.current=setTimeout(revealNext,isEnd?380:140);
    };
    timerRef.current=setTimeout(revealNext,700);
    return()=>clearTimeout(timerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(() => {
    if(containerRef.current) containerRef.current.scrollTo({top:containerRef.current.scrollHeight,behavior:"smooth"});
  },[revealedWords]);

  const skipToEnd = () => {
    clearTimeout(timerRef.current);
    setRevealedWords(allWords.length);
    setIsFullyRevealed(true);
  };

  let wc=0;

  return (
    <div style={{
      position:"fixed",inset:0,zIndex:90,display:"flex",alignItems:"center",justifyContent:"center",
      background:"rgba(45,58,49,0.45)",backdropFilter:"blur(10px)",animation:"fadeIn 0.5s ease-out",
    }} onClick={onClose}>
      <div ref={containerRef}
        onClick={e=>{e.stopPropagation();if(!isFullyRevealed)skipToEnd();}}
        style={{
          background:"#F9F8F4",borderRadius:24,padding:"44px 36px",
          maxWidth:560,width:"92vw",maxHeight:"82vh",overflow:"auto",
          position:"relative",cursor:isFullyRevealed?"default":"pointer",
          boxShadow:"0 25px 50px -12px rgba(45,58,49,0.25)",
        }}>
        <button onClick={e=>{e.stopPropagation();onClose();}} style={{
          position:"sticky",top:0,float:"right",background:"rgba(249,248,244,0.9)",
          border:"none",fontSize:20,color:"#8C9A84",cursor:"pointer",
          width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",
          borderRadius:"50%",transition:"background 0.3s",zIndex:2,
        }}
          onMouseEnter={e=>e.currentTarget.style.background="rgba(140,154,132,0.15)"}
          onMouseLeave={e=>e.currentTarget.style.background="rgba(249,248,244,0.9)"}
        >✕</button>

        <div style={{marginBottom:28,paddingBottom:20,borderBottom:"1px solid #E6E2DA"}}>
          <h2 style={{
            fontFamily:"'Playfair Display',Georgia,serif",
            fontSize:"clamp(22px,5vw,28px)",fontWeight:600,
            color:"#2D3A31",margin:0,fontStyle:"italic",lineHeight:1.3,
          }}>{poem.title}</h2>
          <p style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:13,color:"#8C9A84",margin:"8px 0 0 0"}}>{poem.author}</p>
          <p style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:12,color:"#BFBAB2",margin:"2px 0 0 0",fontStyle:"italic"}}>{poem.source}</p>
        </div>

        <div style={{minHeight:160}}>
          {poem.lines.map((line,li) => {
            if(line===""){wc++;return <div key={li} style={{height:18}}/>;}
            return (
              <div key={li} style={{marginBottom:6,lineHeight:1.8,minHeight:28}}>
                {line.split(" ").map((word,wi) => {
                  wc++;
                  const vis=wc<=revealedWords;
                  return <span key={wi} style={{
                    fontFamily:"'Playfair Display',Georgia,serif",
                    fontSize:"clamp(18px,4vw,22px)",color:"#2D3A31",
                    display:"inline-block",opacity:vis?1:0,
                    transform:vis?"translateY(0)":"translateY(8px)",
                    transition:"opacity 0.4s ease-out,transform 0.4s ease-out",
                    marginRight:6,
                  }}>{word}</span>;
                })}
              </div>
            );
          })}
        </div>

        {!isFullyRevealed && (
          <p style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:11,color:"#DCCFC2",textAlign:"center",marginTop:20,letterSpacing:"0.12em",textTransform:"uppercase"}}>
            tap to reveal all
          </p>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────── POEM CARD ───────────────────────── */
function PoemCard({ poem, seasonColor, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div onClick={onClick}
      onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
      style={{
        background:hovered?"#FFFFFF":"#FAFAF7",
        border:"1px solid #E6E2DA",borderRadius:24,
        padding:"24px 22px 20px",cursor:"pointer",
        transition:"all 0.5s ease-out",
        transform:hovered?"translateY(-4px)":"translateY(0)",
        boxShadow:hovered?"0 20px 40px -10px rgba(45,58,49,0.1)":"0 4px 6px -1px rgba(45,58,49,0.03)",
      }}>
      <div style={{
        width:hovered?48:28,height:3,borderRadius:2,
        background:seasonColor,transition:"width 0.4s ease-out",marginBottom:14,
      }}/>
      <h3 style={{
        fontFamily:"'Playfair Display',Georgia,serif",fontSize:18,
        fontWeight:600,color:"#2D3A31",margin:"0 0 4px 0",
        fontStyle:"italic",lineHeight:1.3,
      }}>{poem.title}</h3>
      <p style={{
        fontFamily:"'Source Sans 3',sans-serif",fontSize:12,
        color:"#8C9A84",margin:"0 0 10px 0",
      }}>{poem.author}</p>
      <p style={{
        fontFamily:"'Playfair Display',Georgia,serif",fontSize:15,
        color:"#6B7B6F",margin:0,lineHeight:1.5,fontStyle:"italic",
        display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",
      }}>
        {poem.lines.filter(l=>l!=="").slice(0,2).join(" ")}...
      </p>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14}}>
        <span style={{
          fontFamily:"'Source Sans 3',sans-serif",fontSize:10,color:"#BFBAB2",
          fontStyle:"italic",maxWidth:"70%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",
        }}>{poem.source}</span>
        <span style={{
          display:"flex",alignItems:"center",gap:4,color:seasonColor,
          fontFamily:"'Source Sans 3',sans-serif",fontSize:11,letterSpacing:"0.12em",
          textTransform:"uppercase",fontWeight:500,
        }}>
          Read
          <span style={{
            display:"inline-block",transition:"transform 0.3s ease-out",
            transform:hovered?"translateX(3px)":"translateX(0)",
          }}>→</span>
        </span>
      </div>
    </div>
  );
}

/* ───────────────────────── SEASON SECTION ───────────────────────── */
function SeasonSection({ season, onPoemClick, isVisible }) {
  return (
    <section style={{
      padding:"clamp(48px,8vw,80px) 0",opacity:isVisible?1:0,
      transform:isVisible?"translateY(0)":"translateY(30px)",
      transition:"opacity 0.8s ease-out,transform 0.8s ease-out",
    }}>
      <div style={{textAlign:"center",marginBottom:40}}>
        <span style={{fontSize:28,display:"block",marginBottom:6}}>{season.icon}</span>
        <h2 style={{
          fontFamily:"'Playfair Display',Georgia,serif",
          fontSize:"clamp(36px,7vw,52px)",fontWeight:700,
          color:"#2D3A31",margin:0,lineHeight:1.1,
        }}>{season.label}</h2>
        <p style={{
          fontFamily:"'Playfair Display',Georgia,serif",
          fontSize:16,color:season.color,margin:"4px 0 0 0",fontStyle:"italic",
        }}>{season.subtitle}</p>
        <div style={{width:1,height:32,background:"#E6E2DA",margin:"20px auto 0"}}/>
      </div>
      <div style={{
        display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",
        gap:16,maxWidth:1080,margin:"0 auto",padding:"0 20px",
      }}>
        {season.poems.map(poem => (
          <PoemCard key={poem.title} poem={poem} seasonColor={season.color} onClick={()=>onPoemClick(poem)}/>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── VINE ───────────────────────── */
function Vine() {
  return (
    <svg viewBox="0 0 240 60" style={{width:200,height:50,display:"block",margin:"0 auto",opacity:0.12}}>
      <path d="M20 30 Q60 8 120 30 Q180 52 220 30" fill="none" stroke="#8C9A84" strokeWidth="1"/>
      <circle cx="70" cy="20" r="2.5" fill="#8C9A84" opacity="0.5"/>
      <circle cx="170" cy="40" r="2.5" fill="#8C9A84" opacity="0.5"/>
      <circle cx="120" cy="30" r="3" fill="#8C9A84" opacity="0.3"/>
    </svg>
  );
}

/* ───────────────────────── MAIN APP ───────────────────────── */
export default function PoetryGarden() {
  const [introComplete, setIntroComplete] = useState(false);
  const [siteVisible, setSiteVisible] = useState(false);
  const [selectedPoem, setSelectedPoem] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
    setTimeout(() => setSiteVisible(true), 100);
  }, []);

  useEffect(() => {
    if(!introComplete) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if(e.isIntersecting) setVisibleSections(p => ({...p,[e.target.dataset.season]:true}));
      }),
      {threshold:0.1}
    );
    Object.values(sectionRefs.current).forEach(r => r && observer.observe(r));
    return () => observer.disconnect();
  },[introComplete]);

  useEffect(() => {
    document.body.style.overflow = selectedPoem ? "hidden" : "";
    return () => {document.body.style.overflow="";};
  },[selectedPoem]);

  const seasonEntries = Object.entries(poems);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Source+Sans+3:wght@300;400;500;600&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}
        body{background:#F9F8F4;overflow-x:hidden}
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:#DCCFC2;border-radius:3px}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        ::selection{background:rgba(140,154,132,0.25);color:#2D3A31}
      `}</style>

      <div style={{
        pointerEvents:"none",position:"fixed",inset:0,zIndex:50,opacity:0.015,
        backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat:"repeat",
      }}/>

      {!introComplete && <IntroSequence onComplete={handleIntroComplete}/>}

      <div style={{
        minHeight:"100vh",background:"#F9F8F4",
        opacity:siteVisible?1:0,transition:"opacity 1.2s ease-out",
      }}>
        <header style={{
          padding:"clamp(40px,8vw,72px) 24px 24px",
          textAlign:"center",maxWidth:700,margin:"0 auto",
        }}>
          <p style={{
            fontFamily:"'Source Sans 3',sans-serif",fontSize:11,
            letterSpacing:"0.3em",textTransform:"uppercase",
            color:"#8C9A84",marginBottom:14,fontWeight:500,
          }}>A Poetry Collection</p>
          <h1 style={{
            fontFamily:"'Playfair Display',Georgia,serif",
            fontSize:"clamp(38px,8vw,68px)",fontWeight:700,
            color:"#2D3A31",lineHeight:1.05,marginBottom:14,
          }}>
            The <span style={{fontStyle:"italic",color:"#8C9A84"}}>Garden</span> of Verses
          </h1>
          <p style={{
            fontFamily:"'Source Sans 3',sans-serif",fontSize:16,
            color:"#6B7B6F",lineHeight:1.7,maxWidth:520,margin:"0 auto 8px",
          }}>
            Poems gathered by the seasons they belong to — from Jeju Island to
            the Tang Dynasty, from 13th-century Persia to a classroom in
            Vermont. Tap any poem to watch it unfurl, word by word.
          </p>
          <Vine/>
        </header>

        <nav style={{
          display:"flex",justifyContent:"center",gap:8,
          padding:"0 20px 32px",flexWrap:"wrap",
        }}>
          {seasonEntries.map(([key,season]) => (
            <button key={key}
              onClick={()=>sectionRefs.current[key]?.scrollIntoView({behavior:"smooth",block:"start"})}
              style={{
                fontFamily:"'Source Sans 3',sans-serif",fontSize:12,
                letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:500,
                color:"#2D3A31",background:"transparent",
                border:`1px solid ${season.color}`,borderRadius:999,
                padding:"9px 20px",cursor:"pointer",transition:"all 0.3s ease-out",
              }}
              onMouseEnter={e=>{e.currentTarget.style.background=season.color;e.currentTarget.style.color="#FFF";}}
              onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color="#2D3A31";}}
            >{season.icon} {season.label}</button>
          ))}
        </nav>

        {seasonEntries.map(([key,season],si) => (
          <div key={key} ref={el=>(sectionRefs.current[key]=el)} data-season={key}>
            <SeasonSection season={season} onPoemClick={setSelectedPoem} isVisible={!!visibleSections[key]}/>
            {si<seasonEntries.length-1 && <Vine/>}
          </div>
        ))}

        <footer style={{
          textAlign:"center",padding:"56px 24px 40px",
          borderTop:"1px solid #E6E2DA",maxWidth:640,margin:"32px auto 0",
        }}>
          <p style={{
            fontFamily:"'Playfair Display',serif",fontSize:18,
            fontStyle:"italic",color:"#2D3A31",marginBottom:12,lineHeight:1.6,
          }}>
            "Silence is the language of God,<br/>all else is poor translation."
          </p>
          <p style={{
            fontFamily:"'Source Sans 3',sans-serif",fontSize:12,
            color:"#8C9A84",letterSpacing:"0.05em",
          }}>— Rūmī</p>
          <div style={{
            marginTop:28,fontFamily:"'Source Sans 3',sans-serif",
            fontSize:11,color:"#DCCFC2",letterSpacing:"0.08em",lineHeight:1.8,
          }}>
            All poems quoted with attribution from their respective works.
            <br/>
            <em>When Life Gives You Tangerines</em> © Netflix · <em>Dead Poets Society</em> © Touchstone Pictures
            <br/>
            Classical works by Tagore, Kabir, Li Bai, Du Fu & Rūmī are in the public domain.
          </div>
        </footer>
      </div>

      {selectedPoem && <PoemReader poem={selectedPoem} onClose={()=>setSelectedPoem(null)}/>}
    </>
  );
}
