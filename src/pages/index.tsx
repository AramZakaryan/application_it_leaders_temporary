import {Inter} from "next/font/google";
import {CardTest} from "library_it_leaders_temporary";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <div>
            <b>This is Application of It-Leaders (Temporary)</b>
            <p>If you can see here CardTest component in three color</p>
            <p>that means everything is ok, there were successfully</p>
            <p>imported from Library of It-Leaders (Temporary)</p>
            <CardTest color={'red'}/>
            <CardTest color={'green'}/>
            <CardTest color={'blue'}/>
        </div>
    );
}
