import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from './navbar.module.scss'
import React, {useEffect} from 'react'
import {AnimatePresence, motion} from "framer-motion"
import StaticVars from "../../lib/static";

export default function Navbar({navigation, thisPage, settings}) {
   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   })
   const handleScroll = () => {
      document.querySelector('.js-navbar')
         .classList.toggle('isScrolled', scrollY >= 100)
   }
   let metaTitle = `${null !== settings.seo.metaTitle ? settings.seo.metaTitle : false}${undefined !== thisPage.attributes ? ' | ' + thisPage.attributes.Title : false}`;

   return (
      <>
         <Head>
            <title>{metaTitle}</title>
            <meta name="description"
                  content={null !== settings.seo.metaDescription ? settings.seo.metaDescription : 'false'}/>
            <link rel="canonical" href=""/>
            <link rel="icon" href="/favicon.ico"/>
         </Head>
         <AnimatePresence exitBeforeEnter>
            {/*<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">*/}
            <motion.nav
               className={'uk-navbar-container uk-background-secondary js-navbar ' + styles.c_navbar}
               uk-navbar="true"
               key={thisPage.attributes.Title}
               variants={StaticVars.motionFade}
               initial='initial'
               animate='animate'
               exit='exit'
               transition='transition'>

               <div className="uk-navbar-left">
                  {navigation && navigation.map((homePage) => {
                     let homeItem
                     if (homePage.path === '/') {
                        homeItem = (
                           <Link href="/" key={homePage.id}>
                              <a className='uk-navbar-item uk-logo'
                              >
                                 {settings.logo && <Image
                                    src={settings.logo.url}
                                    height={settings.logo.height}
                                    width={settings.logo.width}
                                    ayout="fixed"
                                    alt=""
                                 />}
                              </a>
                           </Link>
                        )
                        return homeItem;
                     }
                  })}
               </div>

               <div className="uk-navbar-right">
                  <a className="uk-navbar-toggle uk-navbar-toggle-animate uk-hidden@m" uk-navbar-toggle-icon="true"
                     uk-toggle="target: #sidenav" href="#"></a>
                  <ul className="uk-navbar-nav uk-visible@m">
                     {navigation && navigation.map((page) => {
                        let item;
                        if (page.path !== '/') {

                           if (page.type === 'EXTERNAL' && page.parent === null) {
                              item = (
                                 <li key={page.id}>
                                    <a href={page.externalPath}>
                                       {page.title}
                                    </a>
                                 </li>
                              )
                              return item;
                           }

                           if (page.type === 'INTERNAL' && page.parent === null && page.related !== null) {
                              if (page.related.publishedAt !== null) {
                                 item = (
                                    <li key={page.id}
                                        className={thisPage.attributes.Title === page.title ? 'uk-active' : 'false'}>
                                       <Link
                                          key={page.id}
                                          href={{
                                             pathname: '/[slug]',
                                             query: {
                                                slug: page.related.slug
                                             },
                                          }}
                                       >
                                          <a>{page.title}</a>
                                       </Link>
                                    </li>
                                 )
                                 return item;
                              }
                           }

                           if (page.type === 'WRAPPER') {
                              item = (
                                 <li key={page.id}>
                                    <a>{page.title}</a>

                                    <div className="uk-navbar-dropdown uk-background-secondary uk-dark">
                                       <ul className="uk-nav uk-navbar-dropdown-nav">
                                          {navigation && navigation.map((subpage) => {
                                             if (subpage.parent !== null) {
                                                if (subpage.parent.id === page.id) {
                                                   if (subpage.type === 'EXTERNAL') {
                                                      item = (
                                                         <li key={subpage.id}>
                                                            <a href={subpage.externalPath}>
                                                               {subpage.title}
                                                            </a>
                                                         </li>
                                                      )
                                                      return item;
                                                   }

                                                   if (subpage.type === 'INTERNAL') {
                                                      item = (
                                                         <li key={subpage.id}>
                                                            <Link
                                                               key={subpage.id}
                                                               href={{
                                                                  pathname: '/[slug]',
                                                                  query: {
                                                                     slug: subpage.related.slug
                                                                  },
                                                               }}
                                                               as={`/${subpage.parent.path}/${subpage.related.slug}`}
                                                            >
                                                               <a>{subpage.title}</a>
                                                            </Link>
                                                         </li>
                                                      )
                                                      return item
                                                   }
                                                }
                                             }
                                          })}
                                       </ul>
                                    </div>
                                 </li>
                              )
                              return item;
                           }
                        }
                     })}
                  </ul>
               </div>
            </motion.nav>
            {/*</div>*/}
         </AnimatePresence>

         <div id="sidenav" uk-offcanvas="mode: slide" className="uk-offcanvas uk-hidden@m">
            <div className="uk-offcanvas-bar">
               <ul className="uk-nav">
                  {navigation && navigation.map((page) => {
                     let item;
                     if (page.path !== '/') {

                        if (page.type === 'EXTERNAL' && page.parent === null) {
                           item = (
                              <li key={page.id}>
                                 <a href={page.externalPath}>
                                    {page.title}
                                 </a>
                              </li>
                           )
                           return item;
                        }

                        if (page.type === 'INTERNAL' && page.parent === null && page.related !== null) {
                           if (page.related.publishedAt !== null) {
                              item = (
                                 <li key={page.id}
                                     className={thisPage.attributes.Title === page.title ? 'uk-active' : 'false'}>
                                    <Link
                                       key={page.id}
                                       href={{
                                          pathname: '/[slug]',
                                          query: {
                                             slug: page.related.slug
                                          },
                                       }}
                                    >
                                       <a>{page.title}</a>
                                    </Link>
                                 </li>
                              )
                              return item;
                           }
                        }

                        if (page.type === 'WRAPPER') {
                           item = (
                              <li key={page.id}>
                                 <span>{page.title}</span>
                                 <ul className={styles.c_navbar__sublevel}>
                                    {navigation && navigation.map((subpage) => {
                                       if (subpage.parent !== null) {
                                          if (subpage.parent.id === page.id) {
                                             if (subpage.type === 'EXTERNAL') {
                                                item = (
                                                   <li key={subpage.id}>
                                                      <a href={subpage.externalPath}>
                                                         {subpage.title}
                                                      </a>
                                                   </li>
                                                )
                                                return item;
                                             }

                                             if (subpage.type === 'INTERNAL') {
                                                item = (
                                                   <li key={subpage.id}>
                                                      <Link
                                                         key={subpage.id}
                                                         href={{
                                                            pathname: '/[slug]',
                                                            query: {
                                                               slug: subpage.related.slug
                                                            },
                                                         }}
                                                         as={`/${subpage.parent.path}/${subpage.related.slug}`}
                                                      >
                                                         <a>{subpage.title}</a>
                                                      </Link>
                                                   </li>
                                                )
                                                return item
                                             }
                                          }
                                       }
                                    })}
                                 </ul>
                              </li>
                           )
                           return item;
                        }
                     }
                  })}
               </ul>
            </div>
         </div>
      </>
   )
}