import { Star, Mic, BookOpen, Trophy, ChevronRight, Camera, ExternalLink, Sparkles, Bot } from 'lucide-react';

const toastmasterLevels = [
    { level: 'Level 1', title: 'Mastering Fundamentals', certificate: './certificates/l1 presentation mastery.pdf' },
    { level: 'Level 2', title: 'Learning Your Style', certificate: './certificates/l2 presentation mstery.pdf' },
    { level: 'Level 3', title: 'Increasing Knowledge', certificate: './certificates/l3 presentation mastery.pdf' },
    { level: 'Level 4', title: 'Building Skills', certificate: './certificates/l4 presentation mastery.pdf' },
    { level: 'Level 5', title: 'Demonstrating Expertise', certificate: './certificates/l5 presentation mastery.pdf' },
];

const nxtwaveCycles = [
    { cycle: 'Cycle 1', title: 'Projects Champ', status: 'Completed', progress: '100%' },
    { cycle: 'Cycle 2', title: 'Programming Master', status: 'Completed', progress: '100%' },
    { cycle: 'Cycle 3', title: 'Dynamic Websites Creator', status: 'In Progress', progress: '69%' },
    { cycle: 'Cycle 4', title: 'Full Stack Foundations', status: 'In Progress', progress: '49%' },
    { cycle: 'Special Track', title: 'Generative AI Classes', status: 'In Progress', progress: '65%', isSpecial: true },
];

const TOASTMASTERS_DRIVE_LINK = "https://drive.google.com/drive/folders/10rKg3cJOeNhhYujWIohGNEWykg0PPQXj?usp=sharing";

const ActivitiesSection = () => {
    return (
        <section id="activities" className="py-20 md:py-28 px-4 bg-gradient-to-b from-background to-secondary/30">
            <div className="container mx-auto">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="flex items-center gap-4 mb-4">
                        <Star className="w-6 h-6 text-primary" />
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            Other Activities & Continuous Learning
                        </h2>
                        <div className="flex-1 h-px bg-border" />
                    </div>
                    <p className="text-muted-foreground mb-12 max-w-2xl">
                        Active participation in leadership organizations, competitive public speaking, and systematic engineering training programs.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 items-start">

                        {/* Toastmasters Card */}
                        <div className="rounded-2xl bg-card shadow-soft hover:shadow-card hover:border-primary/40 transition-all duration-300 overflow-hidden border border-border flex flex-col">
                            {/* Header */}
                            <div className="bg-secondary/60 p-6 text-foreground border-b border-border">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-xl bg-card border border-border shadow-xs flex items-center justify-center">
                                        <Mic className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground">Toastmasters International</h3>
                                        <p className="text-muted-foreground text-sm">Presentation Mastery Path — Completed ✅</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <Trophy className="w-4 h-4 text-amber-500" />
                                    <span className="text-sm font-semibold text-foreground">All 5 Levels Completed • Active Speaker</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                                    Completed the entire <span className="text-foreground font-semibold">Presentation Mastery Path</span> in
                                    Toastmasters International, progressing through all 5 levels. Actively attending and presenting across
                                    numerous club and community meetings, developing persuasive storytelling, impromptu speaking, and executive presence.
                                </p>

                                {/* Toastmasters International Image Banner & Drive Link */}
                                <div className="mb-5 rounded-xl overflow-hidden border border-border shadow-soft relative group">
                                    <img
                                        src="./download.jpg"
                                        alt="Toastmasters International"
                                        className="w-full h-44 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <a
                                        href={TOASTMASTERS_DRIVE_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-sm font-semibold backdrop-blur-xs"
                                    >
                                        <Camera className="w-5 h-5 text-amber-300" />
                                        <span>View Meeting Photos on Google Drive</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>

                                {/* Meeting Photos & Memories Button */}
                                <div className="mb-6">
                                    <a
                                        href={TOASTMASTERS_DRIVE_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-primary/15 via-secondary to-accent/15 hover:from-primary/25 hover:to-accent/25 border border-primary/30 transition-all duration-300 shadow-soft"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-primary shrink-0 shadow-xs">
                                                <Camera className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-1.5">
                                                    <span className="text-sm font-bold text-foreground group-hover/btn:text-primary transition-colors">
                                                        Meeting Memories & Photos 📸
                                                    </span>
                                                    <ExternalLink className="w-3.5 h-3.5 text-primary" />
                                                </div>
                                                <p className="text-xs text-muted-foreground">
                                                    Glimpses from numerous meeting attendances & speeches
                                                </p>
                                            </div>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover/btn:translate-x-1 group-hover/btn:text-primary transition-all shrink-0 ml-2" />
                                    </a>
                                </div>

                                {/* Levels Progress */}
                                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Levels Completed (Path Progress)</p>
                                <div className="space-y-2">
                                    {toastmasterLevels.map((item, index) => (
                                        <a
                                            key={item.level}
                                            href={item.certificate}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/80 transition-all duration-200"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0 border border-primary/20">
                                                {index + 1}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                                    {item.level}: {item.title}
                                                </p>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    ))}
                                </div>

                                {/* Additional Toastmaster Achievements */}
                                <div className="mt-4 pt-4 border-t border-border">
                                    <a
                                        href="./certificates/triple crown award.jpg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/80 transition-all duration-200"
                                    >
                                        <Trophy className="w-5 h-5 text-amber-500" />
                                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                            Triple Crown Award 🏆
                                        </span>
                                        <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* NxtWave Card */}
                        <div className="rounded-2xl bg-card shadow-soft hover:shadow-card hover:border-primary/40 transition-all duration-300 overflow-hidden border border-border flex flex-col">
                            {/* Header */}
                            <div className="bg-secondary/60 p-6 text-foreground border-b border-border shrink-0">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-xl bg-card border border-border shadow-xs flex items-center justify-center">
                                        <BookOpen className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground">NxtWave Learning</h3>
                                        <p className="text-muted-foreground text-sm">CCBP 4.0 Academy Program</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <Star className="w-4 h-4 text-amber-500" />
                                    <span className="text-sm font-semibold text-foreground">Growth Cycles 1 & 2 Completed ✅</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                                    Actively building strong software engineering fundamentals through <span className="text-foreground font-semibold">NxtWave's CCBP 4.0</span>.
                                    Successfully completed <span className="text-foreground font-semibold">Growth Cycles 1 & 2</span> (Projects & Programming Mastery), with <span className="text-foreground font-semibold">Cycle 3 at 69%</span>, <span className="text-foreground font-semibold">Cycle 4 at 49%</span>, and specialized <span className="text-primary font-semibold">Generative AI classes at 65% completed</span>.
                                </p>

                                {/* NxtWave Logo */}
                                <div className="mb-5 rounded-xl overflow-hidden shadow-soft flex items-center justify-center aspect-video relative group border border-border shrink-0">
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                                    <img
                                        src="./nxtwave-original.webp"
                                        alt="NxtWave Badge"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Growth Cycles */}
                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Growth Cycles & AI Journey</p>
                                    <span className="text-[11px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                                        2 Cycles Completed
                                    </span>
                                </div>

                                <div className="space-y-2 mb-6">
                                    {nxtwaveCycles.map((item, index) => (
                                        <div
                                            key={item.title}
                                            className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/80 transition-all duration-200"
                                        >
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                                                item.status.includes('Completed')
                                                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300'
                                                    : item.isSpecial
                                                    ? 'bg-primary/15 text-primary border border-primary/30'
                                                    : item.status.includes('In Progress')
                                                    ? 'bg-primary/10 text-primary border border-primary/20'
                                                    : 'bg-secondary text-muted-foreground border border-border'
                                            }`}>
                                                {item.isSpecial ? '✨' : item.cycle.replace('Cycle ', '')}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-center w-full">
                                                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                                                        <span>{item.title}</span>
                                                        {item.isSpecial && (
                                                            <span className="text-[10px] font-semibold bg-primary/10 text-primary px-1.5 py-0.2 rounded border border-primary/20">
                                                                Gen AI
                                                            </span>
                                                        )}
                                                    </p>
                                                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                                                        item.status.includes('Completed')
                                                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300'
                                                            : item.isSpecial
                                                            ? 'bg-primary/15 text-primary border border-primary/25 font-bold'
                                                            : item.status.includes('In Progress')
                                                            ? 'bg-secondary text-foreground border border-border'
                                                            : 'bg-secondary text-muted-foreground'
                                                    }`}>
                                                        {item.progress}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-muted-foreground flex items-center gap-1">
                                                    <span>{item.cycle} • {item.status}</span>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Certifications & Events */}
                                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3 mt-auto">Certifications & Events</p>
                                <div className="space-y-2">
                                    <div className="group flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/15 transition-all duration-200">
                                        <Bot className="w-5 h-5 text-primary shrink-0" />
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm font-semibold text-foreground">Generative AI Classes</p>
                                                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary-foreground">
                                                    65% Completed
                                                </span>
                                            </div>
                                            <p className="text-xs text-muted-foreground">LLMs, Prompt Engineering & AI Application Building</p>
                                        </div>
                                    </div>

                                    <a
                                        href="./certificates/sql_certificate.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/80 transition-all duration-200"
                                    >
                                        <span className="text-lg">🗄️</span>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">SQL Fundamentals Certificate</p>
                                            <p className="text-xs text-muted-foreground">Database management & query optimization</p>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>

                                    <a
                                        href="./certificates/responsive_web_certificate.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/80 transition-all duration-200"
                                    >
                                        <span className="text-lg">📱</span>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Responsive Web Design</p>
                                            <p className="text-xs text-muted-foreground">Building mobile-first applications</p>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>

                                    <div className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/80 transition-all duration-200 cursor-default">
                                        <span className="text-lg">🎙️</span>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-foreground transition-colors">Events, Workshops & Podcasts</p>
                                            <p className="text-xs text-muted-foreground">Actively participating & earning certificates</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ActivitiesSection;
