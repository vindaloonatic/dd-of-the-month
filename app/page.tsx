import CollapseExpandContainer from '../components/CollapseExpandContainer';
import CollapseExpandItem from '../components/CollapseExpandItem';

export default function Home() {
  return (
    <div className="">
      <h1 className="text-[#2A2E6E] text-center text-3xl font-bold mt-8 mb-8">Welcome to Deep Dungeon of the Month Club</h1>
      <CollapseExpandContainer accordionType="collapse">
        <CollapseExpandItem heading="What is Deep Dungeon of the Month Club?">
          <p>Deep Dungeon of the Month Club is a community-driven project where participants share their deep dungeon adventures. Each month, we decide on a job and deep dungeon to run and all it takes to participate is to start your own run!</p>
        </CollapseExpandItem>
        <CollapseExpandItem heading="Is there a goal? Are there prizes?">
          <div>
            <p>The goal is just to start a deep dungeon run and take it however far you want. This could be trying the job for the first time and seeing where you end up, or trying to reach a new score personal best or creating your own specific challenge. We encourage everyone to participate and share their experiences, whether it&apos;s a clear or a duty fail.</p>
            <br />
            <p>You can attempt as many runs as you want in the month, but for submission purposes we will only showcase one of your runs, so make sure to submit the one you want in some fashion by the end of the month. At least currently, there are no prizes planned.</p>
          </div>
        </CollapseExpandItem>
        <CollapseExpandItem heading="So what are these articles for?">
          <p>By the end of the month everything that is submitted through the discord (screen shots, clips, etc) will be collected and compiled into a single monthly article. We will make highlights for certain things like &quot;highest score&quot; or &quot;most poms in inventory after clear&quot;, but also acknowledge achievements that may have occurred in a duty fail run such as &quot;new personal bests&quot; or &quot;first time attempters&quot;.</p>
          <br />
          <p>The purpose is to showcase the community&apos;s efforts and celebrate everyone&apos;s achievements regardless of whether or not the run cleared. We encourage everyone to share their experiences and learn from each other.</p>
        </CollapseExpandItem>
        <CollapseExpandItem heading="I want to participate, but not be in the article, is that ok?">
          <p>Of course! We encourage everyone to participate in whatever way they feel comfortable. If you want to join the discord and do your own runs, but not submit them or even just lurk that is totally fine.</p>
          <br />
          <p>The side goal of this club is to provide a more focused environment with discussion and media (VODs, clips, whatever) on specific jobs and deep dungeons to help anyone interested in their deep dungeon journey, regardless of if they want to be acknowledged in the articles or not.</p>
          <br />
          <p>Your participation and/or submissions may be the encouragment or inspiration for someone else to try their own runs, so every submission is appreciated, but not required.</p>
        </CollapseExpandItem>
      </CollapseExpandContainer>
    </div>
  )
}