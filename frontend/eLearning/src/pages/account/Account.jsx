import React from 'react';
import { UserData } from '../../context/UserContext';
import { CourseData } from '../../context/CourseContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import pfp from '../account/pfp.png';
import { motion } from 'framer-motion';
import { RiLogoutBoxLine, RiDashboardLine, RiPlayCircleLine, RiBookOpenLine, RiTrophyLine } from 'react-icons/ri';

function Account({ user }) {
  const navigate = useNavigate();
  const { setIsAuth, setUser } = UserData();
  const { mycourse } = CourseData();

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out Successfully");
    navigate('/login');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-28 pb-20 px-4 md:px-8">
      {user && (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto space-y-8"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
             <div>
                <h1 className="text-3xl md:text-5xl font-light tracking-tight text-foreground mb-2">
                  Welcome back, <span className="text-primary">{user.name.split(' ')[0]}</span>
                </h1>
                <p className="text-lg text-muted-foreground font-light">Ready to continue your learning journey?</p>
             </div>
             <div className="flex gap-3 w-full md:w-auto">
               {user.role === "admin" && (
                 <button
                   onClick={() => navigate(`/admin/dashboard`)}
                   className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary py-2.5 px-6 rounded-xl font-light transition-all border border-primary/20 shadow-sm"
                 >
                   <RiDashboardLine /> Admin Panel
                 </button>
               )}
               <button
                 onClick={logoutHandler}
                 className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-card border border-border hover:bg-destructive hover:border-destructive hover:text-destructive-foreground text-foreground py-2.5 px-6 rounded-xl font-light transition-all shadow-sm"
               >
                 <RiLogoutBoxLine /> Logout
               </button>
             </div>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Sidebar / Profile Info */}
            <motion.div variants={itemVariants} className="lg:col-span-4 space-y-8">
              <section className="bg-card border border-border p-8 rounded-3xl shadow-sm flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-110"></div>
                  <img
                    className="relative w-32 h-32 rounded-full shadow-lg border-4 border-background object-cover bg-muted z-10"
                    src={pfp}
                    alt={user.name}
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground p-2 rounded-full shadow-lg z-20">
                     <RiTrophyLine className="w-5 h-5" />
                  </div>
                </div>
                <h2 className="text-2xl font-light text-foreground mb-1">{user.name}</h2>
                <p className="text-sm text-muted-foreground font-light mb-6">{user.email}</p>
                
                <div className="w-full grid grid-cols-2 gap-4 border-t border-border pt-6">
                   <div className="flex flex-col items-center">
                     <span className="text-3xl font-light text-foreground">{mycourse?.length || 0}</span>
                     <span className="text-xs font-light text-muted-foreground uppercase tracking-wider mt-1">Courses</span>
                   </div>
                   <div className="flex flex-col items-center">
                     <span className="text-3xl font-light text-foreground">{user.role === 'admin' ? 'Admin' : 'Pro'}</span>
                     <span className="text-xs font-light text-muted-foreground uppercase tracking-wider mt-1">Status</span>
                   </div>
                </div>
              </section>

              {/* Learning Stats */}
              <section className="bg-card border border-border p-6 rounded-3xl shadow-sm">
                <h3 className="text-lg font-light text-foreground mb-4 flex items-center gap-2">
                  <RiPlayCircleLine className="text-primary" /> Daily Goal
                </h3>
                <div className="w-full bg-muted h-3 rounded-full overflow-hidden mb-2">
                   <div className="bg-primary h-full rounded-full w-[60%]"></div>
                </div>
                <p className="text-sm text-muted-foreground font-light text-right">3/5 Hours</p>
              </section>
            </motion.div>

            {/* Main Content Area */}
            <motion.div variants={itemVariants} className="lg:col-span-8 space-y-8">
              
              {/* Continue Learning */}
              <section>
                <h2 className="text-2xl font-light text-foreground mb-6 flex items-center gap-2">
                  <RiBookOpenLine className="text-primary" /> Continue Learning
                </h2>
                
                {mycourse && mycourse.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mycourse.map((course) => (
                      <div key={course._id} onClick={() => navigate(`/course/study/${course._id}`)} className="group cursor-pointer bg-card border border-border p-4 rounded-3xl shadow-sm hover:shadow-xl hover:border-primary/50 transition-all flex flex-col h-full">
                        <div className="flex gap-4 items-center">
                           <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                             <img src={`http://localhost:5000/${course.image}`} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                           </div>
                           <div className="flex-1">
                             <h3 className="font-light text-foreground line-clamp-2 group-hover:text-primary transition-colors">{course.title}</h3>
                             <p className="text-xs text-muted-foreground mt-1">Instructor: {course.createdBy}</p>
                           </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-border mt-auto">
                          <div className="flex justify-between items-center mb-2">
                             <span className="text-xs font-light text-muted-foreground uppercase tracking-widest">Progress</span>
                             <span className="text-xs font-light text-primary">0%</span>
                          </div>
                          <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-full rounded-full w-[0%]"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="w-full bg-card border border-border rounded-3xl p-10 text-center flex flex-col items-center shadow-sm">
                     <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center text-muted-foreground mb-4">
                       <RiBookOpenLine size={24} />
                     </div>
                     <h3 className="text-xl font-light text-foreground mb-2">No Courses Yet</h3>
                     <p className="text-muted-foreground mb-6 max-w-sm font-light">You haven't enrolled in any courses. Explore our catalog and start learning today!</p>
                     <button onClick={() => navigate('/courses')} className="bg-primary hover:bg-primary/90 text-primary-foreground font-light py-3 px-8 rounded-xl transition-all shadow-md">
                       Browse Courses
                     </button>
                  </div>
                )}
              </section>

            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Account;
